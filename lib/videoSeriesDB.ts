const DB_NAME = "rvs-video-series";
const DB_VERSION = 1;
const STORE_NAME = "access";

export type UserData = {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
  submittedAt: string;
};

export type StoredData = {
  user?: UserData;
  watchedVideos: string[]; // topic IDs
};

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "key" });
      }
    };
  });
}

const DATA_KEY = "video-series-access";

export async function getStoredData(): Promise<StoredData | null> {
  if (typeof window === "undefined") return null;
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(DATA_KEY);
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
    request.onsuccess = () => {
      db.close();
      resolve(request.result?.data ?? null);
    };
  });
}

export async function saveUserAndWatched(
  user: UserData,
  topicId: string
): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const getRequest = store.get(DATA_KEY);

    getRequest.onsuccess = () => {
      const existing = getRequest.result?.data as StoredData | undefined;
      const watched = existing?.watchedVideos ?? [];
      if (!watched.includes(topicId)) {
        watched.push(topicId);
      }
      const data: StoredData = {
        user,
        watchedVideos: watched,
      };
      store.put({ key: DATA_KEY, data });
    };

    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

export async function markVideoWatched(topicId: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const getRequest = store.get(DATA_KEY);

    getRequest.onsuccess = () => {
      const existing = getRequest.result?.data as StoredData | undefined;
      if (!existing?.user) {
        db.close();
        resolve();
        return;
      }
      const watched = [...(existing.watchedVideos ?? [])];
      if (!watched.includes(topicId)) {
        watched.push(topicId);
      }
      const data: StoredData = {
        ...existing,
        watchedVideos: watched,
      };
      store.put({ key: DATA_KEY, data });
    };

    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

export async function hasUserSubmitted(): Promise<boolean> {
  const data = await getStoredData();
  return !!data?.user;
}

export async function getWatchedTopicIds(): Promise<string[]> {
  const data = await getStoredData();
  return data?.watchedVideos ?? [];
}
