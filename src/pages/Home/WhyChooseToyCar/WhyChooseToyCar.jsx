import React from 'react';

const WhyChooseToyCar = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://nwzimg.wezhan.cn/contents/sitefiles2034/10170827/images/10253086.jpg"
              alt="Children playing with toy cars"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>

          {/* Description */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Why Choose Toy Cars?</h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Imagination and Creativity</h3>
              <p className="text-gray-600">
                Toy cars provide endless opportunities for imaginative play. Children can create
                their own stories, build imaginary worlds, and come up with exciting adventures
                using their toy cars.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Motor Skills Development</h3>
              <p className="text-gray-600">
                Playing with toy cars helps children develop their fine motor skills. They learn
                to manipulate the cars, control their movements, and improve hand-eye coordination,
                which is essential for their overall physical development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Social Interaction</h3>
              <p className="text-gray-600">
                Toy cars also encourage social interaction among children. They can engage in
                cooperative play, share their cars with friends, and develop important social
                skills such as turn-taking, sharing, and communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseToyCar;
