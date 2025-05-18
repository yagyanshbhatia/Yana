import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the Different Types of Medical Imaging',
      excerpt: 'Learn about the various imaging techniques available and when each one is used for optimal diagnosis.',
      date: 'March 15, 2025',
      author: 'Dr. Priya',
      category: 'Educational',
      image: 'https://images.unsplash.com/photo-1576671414121-aa0c81c869e1',
      content: `
        <p>Medical imaging plays a crucial role in diagnosing and treating various health conditions. It allows healthcare providers to see inside your body without making an incision. Here's a brief overview of the most common types of medical imaging:</p>
        
        <h3>X-Ray</h3>
        <p>X-rays are the oldest and most commonly used form of medical imaging. They use radiation to create images of the structures inside your body, particularly bones. X-rays are excellent for detecting fractures, certain lung conditions, and some types of infections.</p>
        
        <h3>Ultrasound</h3>
        <p>Ultrasound imaging uses high-frequency sound waves to create pictures of the inside of your body. It's particularly effective for visualizing soft tissues, organs, and blood flow. Ultrasound is commonly used during pregnancy to monitor fetal development but is also valuable for examining organs like the liver, heart, and kidneys.</p>
        
        <h3>MRI (Magnetic Resonance Imaging)</h3>
        <p>MRI uses a strong magnetic field and radio waves to generate detailed images of organs and tissues. It's especially useful for examining the brain, spinal cord, and soft tissues. MRI can detect subtle changes in tissues that other imaging methods might miss, making it valuable for diagnosing conditions like tumors, joint injuries, and neurological disorders.</p>
        
        <h3>CT (Computed Tomography) Scan</h3>
        <p>CT scans combine X-ray images taken from different angles to create cross-sectional images of bones, blood vessels, and soft tissues. These detailed images provide more information than standard X-rays and are particularly helpful in emergency situations to quickly identify internal injuries or bleeding.</p>
        
        <p>Choosing the right imaging method depends on several factors, including the part of the body being examined, the nature of the suspected condition, and patient-specific considerations like age and medical history. Your healthcare provider will recommend the most appropriate imaging technique for your specific needs.</p>
      `
    },
    {
      id: 2,
      title: 'Preparing for Your First MRI: What to Expect',
      excerpt: 'Tips to help you feel comfortable and prepared for your magnetic resonance imaging procedure.',
      date: 'March 5, 2025',
      author: 'Whybee',
      category: 'Patient Tips',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
      content: `
        <p>If you've been scheduled for your first MRI (Magnetic Resonance Imaging), you might be feeling a bit anxious about what to expect. Here's a comprehensive guide to help you prepare for your procedure:</p>

        <h3>Before Your Appointment</h3>
        <p>Inform your doctor about any medical conditions you have, particularly if you have any metal implants, devices, or fragments in your body. Some metal objects can interfere with the MRI's magnetic field or potentially pose a risk. These include:</p>
        <ul>
          <li>Pacemakers or defibrillators</li>
          <li>Artificial heart valves</li>
          <li>Implanted drug infusion ports</li>
          <li>Artificial limbs or joints</li>
          <li>Metal pins, screws, plates, or surgical staples</li>
          <li>Intrauterine devices (IUDs)</li>
        </ul>
        
        <h3>What to Wear</h3>
        <p>Wear comfortable, loose-fitting clothes without metal fasteners, zippers, or buttons. You might be asked to change into a hospital gown for the procedure. Leave jewelry, watches, and other metal accessories at home. Some facilities may ask you to remove makeup as some cosmetics contain metals that can interact with the MRI magnet.</p>
        
        <h3>During the Procedure</h3>
        <p>You'll lie on a movable table that slides into the MRI machine, which is typically tube-shaped. Depending on the part of your body being scanned, you might go in head-first or feet-first. The technologist will position you to ensure the area being studied is in the center of the machine.</p>
        <p>The MRI scanner makes loud knocking and thumping noises during the examination. You'll be given earplugs or headphones to minimize the noise. It's important to lie still during the imaging process to ensure clear images. The procedure typically takes 15 to 90 minutes, depending on the type of scan.</p>
        
        <h3>Managing Claustrophobia</h3>
        <p>If you're claustrophobic or anxious about confined spaces, let your doctor know beforehand. They might prescribe a mild sedative to help you relax. Some facilities offer open MRI machines, which are less confining and might be an option for you.</p>
        
        <h3>After Your MRI</h3>
        <p>Once the scan is complete, you can typically resume your normal activities immediately. If you received a sedative, you'll need someone to drive you home. The radiologist will analyze your images and send a report to your doctor, who will discuss the results with you at a follow-up appointment.</p>
        
        <p>Remember, an MRI is a painless procedure that provides valuable diagnostic information. Being prepared and knowing what to expect can help make your experience more comfortable.</p>
      `
    },
    {
      id: 3,
      title: 'The Role of Radiology in Early Cancer Detection',
      excerpt: 'How advanced imaging techniques are helping to detect cancer at earlier, more treatable stages.',
      date: 'February 28, 2025',
      author: 'Dr. Priya',
      category: 'Medical Advances',
      image: 'https://images.unsplash.com/photo-1666214280352-db292c05fd80',
      content: `
        <p>Early detection of cancer significantly increases the chances of successful treatment. Radiology plays a crucial role in identifying cancers at their earliest, most treatable stages. Let's explore how various imaging techniques contribute to early cancer detection:</p>
        
        <h3>Mammography for Breast Cancer</h3>
        <p>Mammography remains the gold standard for breast cancer screening. Digital mammography and the newer 3D mammography (tomosynthesis) can detect small tumors before they can be felt during a physical examination. Regular screenings are recommended for women over 40 or earlier for those with high-risk factors.</p>
        
        <h3>Low-Dose CT for Lung Cancer</h3>
        <p>Low-dose computed tomography (LDCT) has revolutionized lung cancer screening. It can detect small lung cancers in high-risk individuals, particularly long-term smokers, before symptoms develop. Studies have shown that LDCT screening can reduce lung cancer mortality by 20% in high-risk populations.</p>
        
        <h3>MRI for Various Cancers</h3>
        <p>Magnetic Resonance Imaging is particularly valuable for detecting cancers in soft tissues. It's used for screening individuals at high risk for breast cancer, especially those with dense breast tissue where mammography might miss abnormalities. MRI is also effective in detecting and staging prostate cancer, liver tumors, and brain cancers.</p>
        
        <h3>Ultrasound as a Complementary Tool</h3>
        <p>Ultrasound is often used alongside other imaging methods to further investigate suspicious findings. It's particularly useful for examining the thyroid, liver, kidneys, and ovaries. Ultrasound-guided biopsies allow for precise sampling of suspicious tissues for definitive diagnosis.</p>
        
        <h3>PET-CT for Advanced Detection</h3>
        <p>Positron Emission Tomography combined with CT (PET-CT) provides both anatomical and functional information. It can detect areas of abnormal metabolic activity that might indicate cancer, even before structural changes are visible on other imaging tests. PET-CT is valuable for detecting metastases and evaluating treatment response.</p>
        
        <h3>The Future of Radiological Cancer Detection</h3>
        <p>Advances in artificial intelligence (AI) are enhancing radiologists' ability to detect subtle abnormalities that might indicate early cancer. AI algorithms can analyze thousands of images and identify patterns that might be missed by the human eye. These technologies are continuously improving and may significantly enhance early detection capabilities.</p>
        
        <p>While imaging plays a vital role in early cancer detection, it's important to remember that no screening test is perfect. False positives and false negatives can occur. That's why a comprehensive approach to cancer screening, including regular check-ups, awareness of personal risk factors, and appropriate screening based on age and risk profile, is essential for optimal health.</p>
      `
    },
    {
      id: 4,
      title: 'Keeping Children Calm During Imaging Procedures',
      excerpt: 'Strategies for parents and healthcare providers to reduce anxiety in pediatric patients.',
      date: 'February 20, 2025',
      author: 'Whybee',
      category: 'Patient Care',
      image: 'https://images.unsplash.com/photo-1666214282459-c7dff167ecc0',
      content: `
        <p>Medical imaging procedures can be intimidating for children, but with the right preparation and support, they can be made much less stressful. Here are strategies for keeping children calm and cooperative during imaging procedures:</p>
        
        <h3>Age-Appropriate Preparation</h3>
        <p>The way you prepare a child depends largely on their age and developmental stage:</p>
        <ul>
          <li><strong>Infants (0-1 year):</strong> Scheduling around nap times can help ensure they're sleepy or asleep during the procedure.</li>
          <li><strong>Toddlers (1-3 years):</strong> Simple, concrete explanations using positive language work best. Using stuffed animals to demonstrate what will happen can be effective.</li>
          <li><strong>Preschoolers (3-5 years):</strong> Picture books about going to the hospital or having a specific procedure can help familiarize them with what to expect.</li>
          <li><strong>School-age children (6-12 years):</strong> More detailed explanations about why the procedure is needed and how it will help them understand better.</li>
          <li><strong>Teenagers:</strong> Respect their need for privacy and control. Involve them in discussions and decision-making when appropriate.</li>
        </ul>
        
        <h3>Communication Techniques</h3>
        <p>How you talk about the procedure matters:</p>
        <ul>
          <li>Use simple, non-threatening language</li>
          <li>Be honest but emphasize the positive aspects</li>
          <li>Avoid words that might frighten children, such as "shot," "pain," or "hurt"</li>
          <li>Instead of "The machine takes pictures of your insides," try "This special camera helps the doctor see inside your body to make sure everything is working properly"</li>
        </ul>
        
        <h3>Distraction Strategies</h3>
        <p>Keeping a child's mind occupied can significantly reduce anxiety:</p>
        <ul>
          <li>Bringing a favorite toy or comfort item</li>
          <li>Telling stories or playing simple word games</li>
          <li>Listening to music or audiobooks (when permissible)</li>
          <li>Counting or deep breathing exercises</li>
          <li>Using guided imagery (imagining a favorite place)</li>
        </ul>
        
        <h3>Creating a Child-Friendly Environment</h3>
        <p>At YANA Health, we strive to make our imaging rooms as welcoming as possible for young patients:</p>
        <ul>
          <li>Colorful, cheerful décor</li>
          <li>Child-sized gowns with fun patterns</li>
          <li>Special rewards or certificates for completing the procedure</li>
          <li>Staff trained specifically in pediatric care</li>
        </ul>
        
        <h3>Parental Involvement</h3>
        <p>Parents play a crucial role in keeping children calm:</p>
        <ul>
          <li>Stay calm yourself - children take emotional cues from their parents</li>
          <li>Maintain a positive attitude and reassuring presence</li>
          <li>In many cases, you can stay with your child during the procedure</li>
          <li>Comfort your child with gentle touch and soothing words</li>
        </ul>
        
        <p>With proper preparation and support, most children can successfully complete imaging procedures with minimal stress. At YANA Health, our team is specially trained to work with pediatric patients, ensuring they receive the care they need in a supportive, understanding environment.</p>
      `
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Announcements</h1>
            <div className="w-20 h-1 bg-yana-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Stay updated with the latest news, health tips, and insights from YANA Health Scans & Labs.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Featured Post */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="h-64 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="p-6 md:w-1/2">
                    <div className="flex items-center text-sm mb-3">
                      <span className="bg-yana-orange text-white px-3 py-1 rounded-full">{blogPosts[0].category}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-gray-500">{blogPosts[0].date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{blogPosts[0].title}</h2>
                    <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1673865641073-4479f93a7776"
                        alt={blogPosts[0].author}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <span className="text-gray-700 font-medium">{blogPosts[0].author}</span>
                    </div>
                    <div className="mt-auto">
                      <Link
                        to={`/blog/${blogPosts[0].id}`}
                        className="inline-flex items-center font-medium text-yana-orange hover:text-yana-orange-dark"
                      >
                        Read Full Article
                        <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular Posts */}
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm mb-3">
                    <span className="bg-yana-orange text-white px-3 py-1 rounded-full">{post.category}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center mb-6">
                    <img
                      src={post.author === 'Dr. Priya' ? 'https://images.unsplash.com/photo-1673865641073-4479f93a7776' : 'https://images.unsplash.com/photo-1612276529418-52e6ad86ee1d'}
                      alt={post.author}
                      className="w-8 h-8 rounded-full mr-3 object-cover"
                    />
                    <span className="text-gray-700 font-medium">{post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center font-medium text-yana-orange hover:text-yana-orange-dark"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with the latest health tips, technology advances, and news from YANA Health.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 flex-grow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yana-orange focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yana-orange text-white rounded-md hover:bg-yana-orange-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;