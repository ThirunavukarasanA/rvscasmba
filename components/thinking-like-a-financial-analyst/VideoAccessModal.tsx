"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getTopicById,
  getNextTopicId,
  getPrevTopicId,
  type TopicItem,
} from "@/lib/videoSeriesData";
import {
  getStoredData,
  saveUserAndWatched,
  markVideoWatched,
  type UserData,
} from "@/lib/videoSeriesDB";

interface VideoAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicId: string;
  onProgressUpdate?: () => void;
}

export default function VideoAccessModal({
  isOpen,
  onClose,
  topicId,
  onProgressUpdate,
}: VideoAccessModalProps) {
  const [currentTopic, setCurrentTopic] = useState<TopicItem | null>(null);
  const [userSubmitted, setUserSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const loadState = useCallback(async () => {
    const data = await getStoredData();
    setUserSubmitted(!!data?.user);
    const topic = getTopicById(topicId);
    setCurrentTopic(topic ?? null);
    if (data?.user) {
      setShowForm(false);
      setShowVideo(true);
    } else {
      setShowForm(true);
      setShowVideo(false);
    }
  }, [topicId]);

  useEffect(() => {
    if (isOpen && topicId) {
      document.body.style.overflow = "hidden";
      loadState();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, topicId, loadState]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setIsSubmitting(true);
    try {
      const userData: UserData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        consent: formData.consent,
        submittedAt: new Date().toISOString(),
      };
      
      // Save to IndexedDB
      await saveUserAndWatched(userData, topicId);
      
      // Save to MongoDB
      await fetch("/api/video-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          consent: formData.consent,
          topicId: topicId,
        }),
      });
      
      setUserSubmitted(true);
      setShowForm(false);
      setShowVideo(true);
      onProgressUpdate?.();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (currentTopic && userSubmitted) {
      markVideoWatched(currentTopic.id).then(async () => {
        // Also update in MongoDB
        const storedData = await getStoredData();
        if (storedData?.user) {
          await fetch("/api/video-access", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: storedData.user.name,
              email: storedData.user.email,
              phone: storedData.user.phone,
              consent: storedData.user.consent,
              topicId: currentTopic.id,
            }),
          });
        }
        onProgressUpdate?.();
      });
    }
    onClose();
  };

  const goToNext = () => {
    const nextId = getNextTopicId(currentTopic?.id ?? "");
    if (nextId && currentTopic) {
      markVideoWatched(currentTopic.id).then(async () => {
        // Also update in MongoDB
        const storedData = await getStoredData();
        if (storedData?.user) {
          await fetch("/api/video-access", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: storedData.user.name,
              email: storedData.user.email,
              phone: storedData.user.phone,
              consent: storedData.user.consent,
              topicId: currentTopic.id,
            }),
          });
        }
        onProgressUpdate?.();
      });
      const nextTopic = getTopicById(nextId);
      if (nextTopic) {
        setCurrentTopic(nextTopic);
        setShowForm(false);
        setShowVideo(true);
      }
    }
  };

  const goToPrev = () => {
    const prevId = getPrevTopicId(currentTopic?.id ?? "");
    if (prevId) {
      const prevTopic = getTopicById(prevId);
      if (prevTopic) {
        setCurrentTopic(prevTopic);
        setShowForm(false);
        setShowVideo(true);
      }
    }
  };

  const nextTopicId = currentTopic ? getNextTopicId(currentTopic.id) : null;
  const prevTopicId = currentTopic ? getPrevTopicId(currentTopic.id) : null;
  const nextTopic = nextTopicId ? getTopicById(nextTopicId) : null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-booth-bg-gray">
          <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray truncate pr-4">
            {currentTopic?.title ?? "Video"}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-gray-200 transition shrink-0"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5 text-booth-dark-gray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {showForm && (
          <div className="px-6 md:px-8 py-6 overflow-y-auto flex-1">
            <div className="w-12 h-0.5 bg-booth-maroon mb-4"></div>
            <p className="text-booth-light-gray font-trade-gothic-light text-sm mb-6">
              Share your details to access this video and receive updates on the
              series.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-booth-dark-gray font-trade-gothic-bold text-sm mb-1"
                >
                  Full Name <span className="text-booth-maroon">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-booth-dark-gray font-trade-gothic-bold text-sm mb-1"
                >
                  Email <span className="text-booth-maroon">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light text-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-booth-dark-gray font-trade-gothic-bold text-sm mb-1"
                >
                  Mobile <span className="text-booth-maroon">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light text-sm"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 border-2 border-gray-300 text-booth-maroon focus:ring-booth-maroon"
                  />
                  <span className="text-booth-dark-gray font-trade-gothic-light text-sm">
                    I agree to receive updates about this series and related
                    content from RVS CAS MBA, including new video releases and
                    program information. I understand I can unsubscribe at any
                    time.
                  </span>
                </label>
                {!formData.consent && (
                  <p className="text-booth-maroon text-xs mt-1 ml-7">
                    Consent is required to access the video.
                  </p>
                )}
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="submit"
                  disabled={!formData.consent || isSubmitting}
                  className="flex-1 bg-booth-maroon text-white px-6 py-3 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Continue to Video"}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 border-2 border-gray-300 text-booth-dark-gray font-trade-gothic-bold uppercase hover:border-booth-maroon hover:text-booth-maroon transition text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {showVideo && currentTopic && (
          <div className="flex flex-col flex-1 min-h-0">
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${currentTopic.videoId}?autoplay=1`}
                title={currentTopic.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-4 py-3 border-t border-gray-200 bg-booth-bg-gray">
              <div className="flex gap-2">
                <button
                  onClick={goToPrev}
                  disabled={!prevTopicId}
                  className="px-4 py-2 border-2 border-booth-maroon text-booth-maroon font-trade-gothic-bold uppercase text-sm hover:bg-booth-maroon hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-booth-maroon"
                >
                  Previous
                </button>
                <button
                  onClick={goToNext}
                  disabled={!nextTopicId}
                  className="px-4 py-2 bg-booth-maroon text-white font-trade-gothic-bold uppercase text-sm hover:bg-opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
              {nextTopic && (
                <p className="text-booth-light-gray font-trade-gothic-light text-sm truncate max-w-[50%]">
                  Up next: {nextTopic.title}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
