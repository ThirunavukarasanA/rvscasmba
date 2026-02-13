export default function CampusCommunitySection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Campus & Community
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold">A Focused and Collaborative Academic Community</p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            The MBA cohort brings together students from diverse backgrounds. Collaboration, peer learning, and open discussion create a supportive and academically focused environment.
          </p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">Faculty engagement extends beyond classroom sessions, fostering a community built on learning and dialogue.</p>
        </div>
      </div>
    </section>
  );
}
