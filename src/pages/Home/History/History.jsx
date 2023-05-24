import React from 'react';

const History = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">History of Toy Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* History Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Early Origins</h3>
            <p className="text-gray-600">
              Toy cars have a rich history that dates back to the early 20th century. The first
              mass-produced toy cars were made of tin and featured simple designs.
            </p>
          </div>

          {/* History Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Post-War Boom</h3>
            <p className="text-gray-600">
              The post-war era saw a significant boom in the toy car industry. Companies like
              Matchbox and Hot Wheels emerged, introducing die-cast metal cars with intricate
              details and realistic designs.
            </p>
          </div>

          {/* History Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Digital Evolution</h3>
            <p className="text-gray-600">
              With the advent of technology, toy cars have evolved to incorporate digital features.
              Remote-controlled cars, augmented reality experiences, and app-controlled vehicles
              have become popular among young car enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
