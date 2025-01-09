"use client"

import Image from "next/image"

export default function AnimatedServiceSection() {
    return (
              <div
                className="relative h-screen flex items-center justify-center"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-opacity-50"></div>
          
                {/* Content */}
                <div className="relative w-[60rem] mx-auto p-8 bg-opacity-90 rounded-lg shadow-lg bg-black">
                  {/* Header */}
                  <h2 className="text-center text-2xl font-bold text-white mb-8">
                    What Services I Offer ?
                  </h2>
          
                  {/* Timeline Section */}
                  <div className="relative flex items-center">
                    {/* Curved Timeline */}
                    <div className="absolute h-full border-l-4 border-dashed border-gray-300 left-12 top-0 z-0"></div>
          
                    {/* Stats Section */}
                    <div className="absolute top-12 left-0 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-800">Services</p>
                        <p className="text-sm text-gray-600">Brief description here.</p>
                      </div>
                    </div>
          
                    {/* Cards Section */}
                    <div className="ml-24 space-y-8">
                      {/* Card 1 */}
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
                            <Image 
                            src={"/images/image1.jpeg"}
                            alt="Image 1"
                            width={100}
                            height={100}
                            className="w-full h-full"
                            />
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Lorem Ipsum
                          </h3>
                          <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                      </div>
          
                      {/* Card 2 */}
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
                            <Image 
                                src={"/images/image1.jpeg"}
                                alt="Image 1"
                                width={100}
                                height={100}
                                className="w-full h-full"
                                />
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Veniam Quis
                          </h3>
                          <p className="text-sm text-gray-600">
                            Dignissim qui blandit veniam quis nostrud exercitation.
                          </p>
                        </div>
                      </div>
          
                      {/* Card 3 */}
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
                            <Image 
                                src={"/images/image1.jpeg"}
                                alt="Image 1"
                                width={100}
                                height={100}
                                className="w-full h-full"
                                />
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                          <h3 className="text-lg font-semibold text-gray-800">Ut Wisi</h3>
                          <p className="text-sm text-gray-600">
                            Ut wisi enim ad minim veniam quis nostrud exerci tation.
                          </p>
                        </div>
                      </div>
          
                      {/* Card 4 */}
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
                            <Image 
                                src={"/images/image1.jpeg"}
                                alt="Image 1"
                                width={100}
                                height={100}
                                className="w-full h-full"
                                />
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Blandit Veniam
                          </h3>
                          <p className="text-sm text-gray-600">
                            Blandit veniam quis nostrud exercitation ullamco laboris nisi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
    )
}