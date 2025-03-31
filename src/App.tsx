import React, { useState, useEffect } from 'react';
import { GraduationCap, Linkedin, Music, BookOpen, Building2, Newspaper, Github, Award, Mail } from 'lucide-react';
// Add imports for company logos
import ciscoLogo from './assets/companies/cisco.png';
import tlabsLogo from './assets/companies/tlabs.png';
import necLogo from './assets/companies/nec.png';
import alteraLogo from './assets/companies/altera.png';
import stanfordLogo from './assets/companies/stanford.png';
import iitkgpLogo from './assets/companies/iitkgp.png';
import juLogo from './assets/companies/ju.png';
import logoColor from './assets/logo/logo-color.png';
// Add these imports at the top of the file
import { FaSpotify, FaYoutube, FaApple } from 'react-icons/fa';
import { SiSpoj, SiGoodreads } from 'react-icons/si';
// Add this import with other imports
import profileImage from './assets/profile/profile_abhishek.png';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ['Innovator', 'Builder', 'Engineer', 'Technical Leader'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-pattern text-white relative">
      {/* Add an overlay to ensure content remains readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 pointer-events-none"></div>
      
      {/* Wrap the content in a relative container to place it above the overlay */}
      <div className="relative">
        {/* Header/Navigation */}
        <nav className="fixed w-full bg-black/50 backdrop-blur-md z-10 border-b border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="relative group">
                  <img 
                    src={logoColor} 
                    alt="AB Logo" 
                    className="h-8 w-auto rounded-lg"
                  />
                  <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('experience')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Experience
                </button>
                <button onClick={() => scrollToSection('education')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Education
                </button>
                {/* Remove projects button */}
                <button onClick={() => scrollToSection('publications')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Publications
                </button>
                <button onClick={() => scrollToSection('patents')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Patents
                </button>
                <button onClick={() => scrollToSection('blogs')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Blogs
                </button>
                <button onClick={() => scrollToSection('music')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Music
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Bio Section */}
          <section className="mb-32 section-fade">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex flex-col items-center">
                <img
                  src={profileImage}
                  alt="Abhishek Bhattacharyya"
                  className="rounded-2xl w-48 h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                {/* Social icons below image */}
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/abhishek-bhattacharyya-a6997526/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=Wy7LuG0AAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <GraduationCap className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:abhishek.bhattacharyyya@gmail.com"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-light mb-2 tracking-tight font-['Courier_New'] font-mono">
                  Abhishek Bhattacharyya
                </h1>
                <div className="h-8 relative mb-6">
                  {roles.map((role, index) => (
                    <span
                      key={role}
                      className={`role-text ${
                        index === currentRoleIndex ? 'active' : ''
                      } text-lg font-bold tracking-wide`}
                      style={{
                        background: index === currentRoleIndex 
                          ? 'linear-gradient(to right, #64B5F6, #81C784, #9575CD)' 
                          : 'none',
                        WebkitBackgroundClip: index === currentRoleIndex ? 'text' : 'none',
                        WebkitTextFillColor: index === currentRoleIndex ? 'transparent' : 'inherit',
                        animation: index === currentRoleIndex ? 'gradientShift 3s ease infinite' : 'none'
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                Innovator and technical leader, specializing in product building and technological innovation. 
                Expertise in cloud computing, networking, IoT, security, and digital transformation. Built several products from grounds up.
                </p>
                <div className="flex items-center space-x-6 text-white/50">
                  <a href="https://www.cisco.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-50 transition-opacity">
                    <img src={ciscoLogo} alt="Cisco Systems" className="h-8 w-auto" />
                  </a>
                  <a href="https://laboratories.telekom.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-50 transition-opacity">
                    <img src={tlabsLogo} alt="T-Labs" className="h-8 w-auto" />
                  </a>
                  <a href="https://www.nec-labs.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-50 transition-opacity">
                    <img src={necLogo} alt="NEC Labs" className="h-8 w-auto" />
                  </a>
                  <a href="https://www.altera.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-50 transition-opacity">
                    <img src={alteraLogo} alt="Altera" className="h-8 w-auto" />
                  </a>
                  <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-50 transition-opacity">
                    <img src={stanfordLogo} alt="Stanford University" className="h-8 w-auto" />
                  </a>
                  <a href="https://www.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-50 transition-opacity">
                    <img 
                      src={iitkgpLogo} 
                      alt="IIT Kharagpur" 
                      className="h-8 w-auto brightness-150 contrast-125" 
                    />
                  </a>
                  <a href="https://jadavpuruniversity.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-50 transition-opacity">
                    <img src={juLogo} alt="Jadavpur University" className="h-8 w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-32 section-fade scroll-mt-20">
            <div className="flex items-center mb-12">
              <Building2 className="w-6 h-6 mr-3" />
              <h2 className="text-3xl font-light tracking-tight">Experience</h2>
            </div>
            <div className="space-y-8">
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Cisco Systems</h3>
                <p className="text-white/50 mb-3">Senior Technical Leader (2012 - Present)</p>
                <p className="text-white/70">
                  Leading development of cloud-native enterprise IoT solutions. Building and scaling infrastructure 
                  for Cisco Spaces IoT Services. Expertise in wireless localization, Computer Networking, Bluetooth, IoT, distributed systems, cloud computing, and microservices architecture.
                </p>
              </div>

              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Altera (now part of Intel)</h3>
                <p className="text-white/50 mb-3">Advanced Design Engineer (2011 - 2012)</p>
                <p className="text-white/70">
                Worked on Altera Resource Computing (ARC), the distributed infrastructure backbone of Altera with more than 100 nodes processing millions of jobs. 
                Implemented a statistics collection and prediction engine about resource usage.
                </p>
              </div>

              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Deutsche Telekom Labs (T-Labs)</h3>
                <p className="text-white/50 mb-3">Research Engineer (May 2008 - Aug 2008)</p>
                <p className="text-white/70">
                Collaborative decision-making for anomaly detection in Wireless Sensor Networks.
                </p>
              </div>

              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">NEC Laboratories </h3>
                <p className="text-white/50 mb-3">Research Intern (Jun 2010 - Sep 2010)</p>
                <p className="text-white/70">
                  Research in networking and distributed systems - Software Defined Networking (OpenFlow) and topology virtualization.
                </p>
              </div>

              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Stanford University</h3>
                <p className="text-white/50 mb-3">Graduate Research Assistant (Oct 2010 - Dec 2010)</p>
                <p className="text-white/70">
                Trade-offs between centralized and distributed approaches in ad-hoc networks.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-32 section-fade scroll-mt-20">
            <div className="flex items-center mb-12">
              <GraduationCap className="w-6 h-6 mr-3" />
              <h2 className="text-3xl font-light tracking-tight">Education</h2>
            </div>
            <div className="space-y-8">
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Stanford University</h3>
                <p className="text-white/50 mb-3">MS in Electrical Engineering (2011)</p>
                <p className="text-white/70">
                  Specialization in Computer Networks, Wireless Networks , Security.
                  Recipient of W. Noel Eldred Memorial Fellowship. 
                </p>
              </div>

              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Jadavpur University</h3>
                <p className="text-white/50 mb-3">B.E. in Electronics and Telecommunications Eng. (2009)</p>
                <p className="text-white/70">
                  First Class with Honours.
                  Recipient of Prof. Jnansaran Chatterjee Memorial Gold Medal.
                </p>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="mb-32 section-fade scroll-mt-20">
            <div className="flex items-center mb-12">
              <BookOpen className="w-6 h-6 mr-3" />
              <h2 className="text-3xl font-light tracking-tight">Publications</h2>
            </div>
            <div className="space-y-8">
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">A centralized algorithm for topology management in mobile ad-hoc networks through multiple coordinators</h3>
                <p className="text-white/50 mb-3">Distributed Computing and Networking: 9th International Conference, ICDCN 2008, Kolkata, India, January 5-8, 2008. Proceedings 9; Springer Berlin Heidelberg, pp 581-586.</p>
                <p className="text-white/70">Bhattacharyya, Abhishek; Seetharam, Anand; Naskar, Mrinal K;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Balancing energy dissipation in data gathering wireless sensor networks using ant colony optimization</h3>
                <p className="text-white/50 mb-3">Distributed Computing and Networking: 10th International Conference, ICDCN 2009, Hyderabad, India, January 3-6, 2009. Proceedings 10; Springer Berlin Heidelberg, pp 437-443</p>
                <p className="text-white/70">Acharya, Ayan; Seetharam, Anand; Bhattacharyya, Abhishek; Naskar, Mrinal Kanti;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Implementing a Topology Management Algorithm for Mobile Ad-Hoc Networks</h3>
                <p className="text-white/50 mb-3">Journal of Applied Computer Science, pp 44-50</p>
                <p className="text-white/70">Seetharam, A; Bhattacharyya, A; Naskar, MK;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">DHS: A Data Handover Scheme for Lifetime Enhancement of Wireless Sensor Networks</h3>
                <p className="text-white/50 mb-3">Journal of Applied Computer Science, pp 23-41, Volume 16, No. 2, 2008.</p>
                <p className="text-white/70">Bhattacharyya, Abhishek; Seetharam, Anand; Naskar, MK; </p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Estimation of node density for an energy efficient deployment scheme in wireless sensor network</h3>
                <p className="text-white/50 mb-3">2008 3rd International Conference on Communication Systems Software and Middleware and Workshops (COMSWARE'08), pp 95-98, 2008 IEEE.</p>
                <p className="text-white/70">Seetharam, Anand; Bhattacharyya, Abhishek; Naskar, Mrinal K; Mukherjee, Amitava;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">A position based algorithm for topology management in Mobile Ad-Hoc Networks enduring limited transmission failures</h3>
                <p className="text-white/50 mb-3">2007 IET-UK International Conference on Information and Communication Technology in Electrical Sciences (ICTES 2007), pp 928-933, IET 2007.</p>
                <p className="text-white/70">Seetharam, Anand; Bhattacharyya, Abhishek; Naskar, MK;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Designing an Energy Efficient Framework for Data Gathering in Wireless 
                Sensor Network</h3>
                <p className="text-white/50 mb-3">International Congress for Global Science and Technology (ICGST), Journal of Computer Network and 
                Internet Research (CNIR), 2010, Volume 3, Issue 4. </p>
                <p className="text-white/70">Mukherjee, Subhabrata; Seetharam, Anand; Bhattacharyya, Abhishek;  Naskar, Mrinal K; Mukherjee, Amitava;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">A Balanced Energy Dissipation Scheme for Enhanced Performance in Data Gathering Wireless Sensor Networks</h3>
                <p className="text-white/50 mb-3"> SPIT-IEEE Colloquium and International Conference, Mumbai, India, Vol. 3, pp 227-232</p>
                <p className="text-white/70">Acharya, Ayan; Seetharam, Anand; Bhattacharyya, Abhishek; Naskar, Mrinal K;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Lifetime enhancement in wireless sensor networks through selective data handover</h3>
                <p className="text-white/50 mb-3">2007 Third International Conference on Wireless Communication and Sensor Networks, 2007, pp 55-60, IEEE.</p>
                <p className="text-white/70">Bhattacharyya, Abhishek; Seetharam, Anand; Dasgupta, Sulagna; Das, Debjyoti; Mitra, Swarup; Naskar, MK;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Machine Learning Framework for Prioritiizing Location Measurement of Multiple Devices</h3>
                <p className="text-white/50 mb-3">Technical Disclosure Commons, (December 21, 2018)</p>
                <p className="text-white/70">Zhang, Xu; Tran, Huy; Silverman, Matt; Mukherji, Abhishek; Raghuram, Vinay; Bhattacharyya, Abhishek; and
                Pandey, Santosh;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Energy Efficient Deployment Strategy for Lifetime Enhancement in Sensor Networks.</h3>
                <p className="text-white/50 mb-3">Journal of Computer Science & Control Systems, Vol 2, Number 2, 2009.</p>
                <p className="text-white/70">Seetharam, Anand; Bhattacharyya, Abhishek; Chakrabarti, Saswat;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">An energy efficient data gathering protocol for wireless sensor networks</h3>
                <p className="text-white/50 mb-3">Journal of Applied Computer Science, Vol 1, No. 2, 2008.</p>
                <p className="text-white/70">Seetharam, A; Acharya, A; Bhattacharyya, A; Naskar, MK;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Glimpsing into the future: An accurate wifi-based client count prediction algorithm</h3>
                <p className="text-white/50 mb-3">17th International Workshop on Mobile Computing Systems and Applications, 2016</p>
                <p className="text-white/70">Tran, Huy; Pandey, Santosh; Bhattacharyya, Abhishek; Natarajan, Preethi; Bulusu, Nirupama; </p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Information-based predictive congestion control for intelligent transportation management</h3>
                <p className="text-white/50 mb-3">Advances in Transportation Studies, Vol 19, 2009.</p>
                <p className="text-white/70">Bhattacharyya, A; Seetharam, A; Naskar, MK; </p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Energy efficient data gathering schemes in wireless sensor networks using ant colony optimization</h3>
                <p className="text-white/50 mb-3">Journal of Applied Computer Science & Mathematics, pp 19-28, Vol 3, No. 1, 2009</p>
                <p className="text-white/70">Anand, Seetharam; Ayan, Akharya; Abhishek, Bhattacharyya; Mrinal, Naskar K;  </p>
              </div>
            </div>
          </section>

          {/* Patents Section */}
          <section id="patents" className="mb-32 section-fade scroll-mt-20">
            <div className="flex items-center mb-12">
              <Award className="w-6 h-6 mr-3" />
              <h2 className="text-3xl font-light tracking-tight">Patents</h2>
            </div>
            
            {/* US Patents */}
            <div className="mb-12">
              <h3 className="text-2xl font-light mb-6 text-white/90 border-b border-white/10 pb-2">US Patents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Efficient zone based client count forecasting.</h3>
                  <p className="text-white/70 text-sm mb-4">
                  Issued: 2017-05-09.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/15151081" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-9648464-B1
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Characterizing movement behaviors of wireless nodes in a network</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 2019-09-24.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/16250043" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-10425912-B1
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Characterizing movement behaviors of wireless nodes in a network (Continuation)</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 2020-01-21.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/16539359" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-10542517-B1
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Location-based, Context-aware Challenge-response Authentication</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 2022-02-01.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/16273947" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-20200257788-A1
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Vendor agnostic sensor telemetry detection, processing, and identification</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 2021-03-23.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/16599309" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-10959290-B1
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Multi-protocol concurrent RSSI and AoA for location computation</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 2021-10-12.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/16989204" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-11143738-B1
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Enabling secure beacon telemetry broadcasts based on battery power state of a beacon device</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 2021-11-16.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/16223573" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-11178540-B2
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Location-based, context-aware challenge-response authentication (Continuation)</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 2022-02-01.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/16273947" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-11238148-B2
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Conserving battery life during Bluetooth device localization</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 2022-03-01.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/17304473" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-11265827-B1
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Event-driven policy based management of wireless beacon and tag devices</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 2022-05-17.
                  </p>
                  <a 
                    href="https://patentcenter.uspto.gov/applications/16299811" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #US-11337155-B2
                  </a>
                </div>
              </div>
            </div>

            {/* International Patents */}
            <div>
              <h3 className="text-2xl font-light mb-6 text-white/90 border-b border-white/10 pb-2">International Patents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Enabling Secure Bluetooth Beacon Telemetry Broadcasts (EU)</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 06-05-2020.
                  </p>
                  <a 
                    href="https://data.epo.org/publication-server/rest/v1.0/publication-dates/20200506/patents/EP3648434NWA1/document.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #EP19205689
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Improving battery life during Bluetooth device localization (DE)</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 19-02-2025.
                  </p>
                  <a 
                    href="https://register.epo.org/application?number=EP22180232"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #EP22180232
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Improving battery life during Bluetooth device localization (EU)</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 19-02-2025.
                  </p>
                  <a 
                    href="https://www.search-for-intellectual-property.service.gov.uk/EP4109931"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #EP4109931
                  </a>
                </div>

                <div className="card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-3">Extending battery life during Bluetooth device positioning (CN)</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Issued: 19-02-2025.
                  </p>
                  <a 
                    href="https://worldwide.espacenet.com/patent/search/family/080442637/publication/CN115515114A?q=pn%3DCN115515114"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Patent #CN115515114A
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Blogs Section */}
          <section id="blogs" className="mb-32 section-fade scroll-mt-20">
            <div className="flex items-center mb-12">
              <Newspaper className="w-6 h-6 mr-3" />
              <h2 className="text-3xl font-light tracking-tight">Blogs</h2>
            </div>
            <div className="space-y-8">
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Supercharging Indoor IoT Management: Cisco DNA Spaces IoT Services Policy Engine</h3>
                <p className="text-white/50 mb-3">April 2022</p>
                <p className="text-white/70 mb-4">Exploring how the Policy Engine in Cisco DNA Spaces IoT Services enables automated responses to IoT device behavior and environmental conditions.</p>
                <a 
                  href="https://blogs.cisco.com/networking/supercharging-indoor-iot-management-cisco-dna-spaces-iot-services-policy-engine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read More →
                </a>
              </div>

              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Managing Your Indoor IoT Environment: Cisco DNA Spaces IoT Services</h3>
                <p className="text-white/50 mb-3">August 2021</p>
                <p className="text-white/70 mb-4">Deep dive into managing and controlling IoT devices through Cisco DNA Spaces IoT Services platform.</p>
                <a 
                  href="https://blogs.cisco.com/networking/managing-your-indoor-iot-environment-cisco-dna-spaces-iot-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read More →
                </a>
              </div>

              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Monitoring Your Indoor IoT Environment: Cisco DNA Spaces IoT Services</h3>
                <p className="text-white/50 mb-3">April 2021</p>
                <p className="text-white/70 mb-4">Overview of monitoring capabilities for indoor IoT devices using Cisco DNA Spaces IoT Services.</p>
                <a 
                  href="https://blogs.cisco.com/networking/monitoring-your-indoor-iot-environment-cisco-dna-spaces-iot-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read More →
                </a>
              </div>
            </div>
          </section>

          {/* Music Section */}
          <section id="music" className="section-fade scroll-mt-20">
            <div className="flex items-center mb-12">
              <Music className="w-6 h-6 mr-3" />
              <h2 className="text-3xl font-light tracking-tight">Music</h2>
            </div>
            <div className="card p-8 rounded-2xl">
              <p className="text-white/70 mb-6 text-center">
                Beyond technology, I'm passionate about music. Listen to my compositions on your favorite platform:
              </p>
              <div className="flex flex-wrap gap-6 justify-center items-center">
                <a
                  href="https://open.spotify.com/artist/6YjAmESDFhji8IpFgRpsE3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#1DB954] transition-colors"
                >
                  <FaSpotify className="w-8 h-8" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_ot_h0ESVqiQ7059xCrs9Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#FF0000] transition-colors"
                >
                  <FaYoutube className="w-8 h-8" />
                </a>
                <a
                  href="https://gaana.com/artist/abhishek-bhattacharyya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#e72c30] transition-colors"
                >
                  <SiGoodreads className="w-8 h-8" />
                </a>
                <a
                  href="https://music.apple.com/us/artist/abhishek-bhattacharyya/1799434017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <FaApple className="w-8 h-8" />
                </a>
                <a
                  href="https://www.jiosaavn.com/artist/abhishek-bhattacharyya/DzHhREB8TiE_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#2BC5B4] transition-colors"
                >
                  <SiSpoj className="w-8 h-8" />
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white/50">© 2024 Abhishek Bhattacharyya</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;