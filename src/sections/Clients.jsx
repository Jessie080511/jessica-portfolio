import { educationData } from '../constants/index.js';

const Education = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Education Experience</h3>

      <div className="education-container mt-8">
        {educationData.map((item) => (
          <div key={`education-${item.id}`} className="education-item mb-10">
            {/* **大学标题部分** */}
            <div className="flex items-center gap-4">
              <img src={item.img} alt="university" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold text-black-800">{item.name}</p>
                <p className="text-gray-500 md:text-base text-sm font-light">{item.degree}</p>
              </div>
            </div>

            {/* **大学阶段的介绍** */}
            <p className="text-gray-800 font-light mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

