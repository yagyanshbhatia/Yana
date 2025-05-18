import React from 'react';

const About = () => {
  const team = [
    {
      name: 'Dr. Priya',
      position: 'Founder & Chief Radiologist',
      bio: 'Dr. Priya founded YANA Health Scans & Labs with a vision to provide compassionate radiological care. With over 15 years of experience, she specializes in diagnostic imaging and patient-centered care.',
      image: 'https://images.unsplash.com/photo-1673865641073-4479f93a7776'
    },
    {
      name: 'Whybee',
      position: 'Lead Technician',
      bio: 'Whybee brings technical expertise and a caring approach to his role as Lead Technician. He ensures all equipment is properly maintained and all procedures follow the highest standards of quality and safety.',
      image: 'https://images.unsplash.com/photo-1612276529418-52e6ad86ee1d'
    }
  ];

  const gallery = [
    {
      image: 'https://images.unsplash.com/photo-1576671414121-aa0c81c869e1',
      title: 'MRI Machine'
    },
    {
      image: 'https://images.unsplash.com/photo-1666214280352-db292c05fd80',
      title: 'CT Scanner'
    },
    {
      image: 'https://images.unsplash.com/photo-1666214282459-c7dff167ecc0',
      title: 'X-Ray Room'
    },
    {
      image: 'https://images.unsplash.com/photo-1630531210843-d6f343ad1f90',
      title: 'Ultrasound Equipment'
    },
    {
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
      title: 'Patient Waiting Area'
    },
    {
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
      title: 'Reception'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About YANA Health</h1>
              <div className="w-20 h-1 bg-yana-orange mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                YANA Health Scans & Labs was founded with a simple but powerful mission: 
                to provide high-quality diagnostic imaging services in an environment where 
                patients feel supported, informed, and never alone.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our name, YANA, stands for "You Are Not Alone," reflecting our commitment to 
                being there for our patients every step of the way. We understand that medical 
                procedures can be intimidating, so we strive to create a warm, welcoming 
                atmosphere where your comfort is prioritized.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yana-orange">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
                <p className="text-gray-600">
                  To provide accessible, high-quality diagnostic imaging services with compassion, 
                  expertise, and the latest technology, ensuring every patient feels supported 
                  throughout their healthcare journey.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551897922-6a919947ae24" 
                alt="YANA Health" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-yana-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-yana-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-2xl text-yana-orange"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We treat every patient with kindness, empathy, and respect, recognizing their individual needs and concerns.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-yana-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-microscope text-2xl text-yana-orange"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in all aspects of our service, from technology to patient care.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-yana-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lock text-2xl text-yana-orange"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical standards in all our interactions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-yana-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-yana-orange"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">
                We ensure that every patient feels supported, informed, and never alone throughout their experience with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-yana-orange mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our dedicated team of professionals is committed to providing the highest quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-yana-orange font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facility</h2>
            <div className="w-20 h-1 bg-yana-orange mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Take a virtual tour of our state-of-the-art facility and equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;