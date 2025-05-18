import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is the difference between an MRI and a CT scan?',
      answer: 'MRI (Magnetic Resonance Imaging) uses strong magnetic fields and radio waves to create detailed images of organs and tissues. It does not use radiation and is particularly good for examining soft tissues. CT (Computed Tomography) uses X-rays to create cross-sectional images of the body. It involves radiation exposure but is faster than MRI and can be better for examining bone injuries, lung and chest imaging, and detecting internal bleeding.'
    },
    {
      question: 'Do I need a doctor\'s referral for radiology services?',
      answer: 'Yes, most radiology services require a doctor\'s referral. This ensures that the appropriate imaging study is performed based on your specific medical needs. If you don\'t have a referral, please contact us, and we can guide you on how to proceed.'
    },
    {
      question: 'How should I prepare for my imaging procedure?',
      answer: 'Preparation varies depending on the type of imaging procedure. For some tests, you may need to fast for several hours beforehand, while others require no special preparation. When scheduling your appointment, our staff will provide you with specific instructions for your procedure. Generally, it\'s advisable to wear comfortable clothing without metal fasteners.'
    },
    {
      question: 'How long will my imaging procedure take?',
      answer: 'The duration varies by procedure: X-rays typically take 5-10 minutes, Ultrasounds 15-30 minutes, CT scans 10-30 minutes, and MRIs 30-60 minutes. These are approximate times and may vary based on individual circumstances.'
    },
    {
      question: 'When will I receive my results?',
      answer: 'Most results are available within 24-48 hours after your procedure. Your images will be interpreted by our radiologists, and a report will be sent to your referring physician. If you have a follow-up appointment scheduled with your doctor, they will discuss the results with you at that time.'
    },
    {
      question: 'Are radiology procedures painful?',
      answer: 'Most radiology procedures are painless. You may experience some discomfort from lying still in certain positions, but the imaging itself does not cause pain. For certain procedures that might cause discomfort, such as some contrast-enhanced studies, our staff will take measures to minimize any discomfort.'
    },
    {
      question: 'Is radiation from imaging procedures dangerous?',
      answer: 'Modern imaging equipment uses the lowest radiation dose necessary to obtain good quality images. The benefits of an accurate diagnosis typically outweigh the small risk from radiation exposure. Some imaging methods, like ultrasound and MRI, don\'t use radiation at all. Our technologists are trained to use techniques that minimize radiation exposure while maintaining diagnostic image quality.'
    },
    {
      question: 'Can I bring someone with me to my appointment?',
      answer: 'Yes, you can bring a friend or family member for support. However, they will generally need to remain in the waiting area during the procedure, except in special circumstances such as pediatric patients or those requiring assistance.'
    },
    {
      question: 'What should I wear to my radiology appointment?',
      answer: 'Wear comfortable, loose-fitting clothes without metal fasteners, zippers, or buttons, as metal can interfere with some imaging techniques. You may be asked to change into a gown for certain procedures. Avoid wearing jewelry and remove any piercings if possible.'
    },
    {
      question: 'Do you offer emergency radiology services?',
      answer: 'Yes, we offer urgent imaging services for patients referred by their physicians or emergency departments. If you have an emergency situation, please go to the nearest emergency room first, and they will coordinate any necessary imaging studies.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <div className="w-20 h-1 bg-yana-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Find answers to common questions about radiology procedures, appointments, and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you couldn't find the information you were looking for, please don't hesitate to contact us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-yana-orange text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Our friendly staff is here to help you from Monday to Saturday, 8am to 8pm.
                </p>
                <a href="tel:+911234567890" className="inline-block text-yana-orange font-medium hover:text-yana-orange-dark">
                  +91 12345 67890
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-yana-orange text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us your queries and we'll get back to you as soon as possible.
                </p>
                <a href="mailto:info@yanahealth.com" className="inline-block text-yana-orange font-medium hover:text-yana-orange-dark">
                  info@yanahealth.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;