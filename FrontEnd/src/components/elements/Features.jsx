import React from 'react';
import newwave from '../../assets/newwave.png';

const Features = () => {
  return (
    <section
      className="w-full h-200 flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${newwave})` }}
      id="projects"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto p-[30px_100px] w-full">
        {/* Left Column (Odd Numbers) */}
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <h1 className="text-6xl font-bold">01</h1>
            <div>
              <h2 className="text-2xl font-semibold text-left">AI-Powered Precision</h2>
              <p className="text-lg text-left">
              Our AI technology analyzes medical data with high accuracy, detecting patterns that enable quicker and more precise diagnoses, leading to better patient outcomes and faster decision-making.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <h1 className="text-6xl font-bold">03</h1>
            <div>
              <h2 className="text-2xl font-semibold text-left">Easy & Faster Diagnoses</h2>
              <p className="text-lg text-left">
                Our solution simplifies diagnostic workflows, reducing time spent on manual tasks. This helps clinicians diagnose patients more quickly, allowing them to focus on providing quality care to each individual.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <h1 className="text-6xl font-bold">05</h1>
            <div>
              <h2 className="text-2xl font-semibold text-left">Seamless Integration</h2>
              <p className="text-lg text-left">
                Our solution integrates smoothly with existing healthcare systems like EHRs and LIS, ensuring minimal disruption to ongoing operations while enhancing overall efficiency and ease of use for clinicians.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Even Numbers) */}
        <div className="flex flex-col gap-8 pt-12">
          <div className="flex items-start gap-4">
            <h1 className="text-6xl font-bold">02</h1>
            <div>
              <h2 className="text-2xl font-semibold text-left">Personalized Treatment Plans</h2>
              <p className="text-lg text-left">
                By providing tailored insights for each patient, our platform enables healthcare professionals to craft personalized treatment plans. This ensures that treatments are aligned with individual patient needs for more effective care.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <h1 className="text-6xl font-bold">04</h1>
            <div>
              <h2 className="text-2xl font-semibold text-left">Real-Time Insights</h2>
              <p className="text-lg text-left">
                With real-time data access, our platform allows clinicians to make informed decisions on the spot. Immediate insights improve patient care by enabling timely interventions and more accurate treatment plans.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <h1 className="text-6xl font-bold">06</h1>
            <div>
              <h2 className="text-2xl font-semibold text-left">Data Security First</h2>
              <p className="text-lg text-left">
                We prioritize the security of patient data by implementing the highest encryption standards and ensuring compliance with industry regulations. This ensures privacy and builds trust with both patients and healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
