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
                <button onClick={() => scrollToSection('publications')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Publications
                </button>
                <button onClick={() => scrollToSection('patents')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Patents
                </button>
                <button onClick={() => scrollToSection('blogs')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Blogs
                </button>
                <button onClick={() => scrollToSection('awards')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Awards
                </button>
                <button onClick={() => scrollToSection('talks')} className="text-white/70 hover:text-white transition-colors hover-link">
                  Talks
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
                  for Cisco Spaces IoT Services. Expertise in wireless localization, Computer Networking, Bluetooth, IoT, IoT Security, distributed systems, cloud computing, and microservices architecture.
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
                <p className="text-white/50 mb-3">Research Internship (May 2008 - Aug 2008)</p>
                <p className="text-white/70">
                Collaborative decision-making for anomaly detection in Wireless Sensor Networks.
                </p>
              </div>

              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">NEC Laboratories </h3>
                <p className="text-white/50 mb-3">Research Internship (Jun 2010 - Sep 2010)</p>
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
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://link.springer.com/chapter/10.1007/978-3-540-77444-0_61" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    A centralized algorithm for topology management in mobile ad-hoc networks through multiple coordinators
                  </a>
                </h3>
                <p className="text-white/50 mb-3">Distributed Computing and Networking. ICDCN 2008. Lecture Notes in Computer Science, vol 4904. Springer, Berlin, Heidelberg.</p>
                <p className="text-white/70">Bhattacharyya, Abhishek; Seetharam, Anand; Naskar, Mrinal K;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://dl.acm.org/doi/10.1007/978-3-540-92295-7_52" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Balancing energy dissipation in data gathering wireless sensor networks using ant colony optimization
                  </a>
                </h3>
                <p className="text-white/50 mb-3"> In: Garg, V., Wattenhofer, R., Kothapalli, K. (eds) Distributed Computing and Networking. ICDCN 2009. Lecture Notes in Computer Science, vol 5408. Springer, Berlin, Heidelberg.</p>
                <p className="text-white/70">Acharya, Ayan; Seetharam, Anand; Bhattacharyya, Abhishek; Naskar, Mrinal Kanti;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://doaj.org/article/678c3ad9f4ad417597444905d7bd6752" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Implementing a Topology Management Algorithm for Mobile Ad-Hoc Networks
                  </a>
                </h3>
                <p className="text-white/50 mb-3">Journal of Applied Computer Science, Vol. 2, no. 4, pp 44-50</p>
                <p className="text-white/70">Seetharam, A; Bhattacharyya, A; Naskar, MK;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://www.academia.edu/6800748/Energy_Efficient_Deployment_and_Scheduling_of_Nodes_in_Wireless_Sensor_Networks" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Energy Efficient Deployment and Scheduling of Nodes in Wireless Sensor Networks
                  </a>
                </h3>
                <p className="text-white/50 mb-3">10th International Symposium on Wireless Personal Multimedia Communications (WPMC 2007)</p>
                <p className="text-white/70">S Chakrabarti A Seetharam, A Bhattacharyya, G Balasubramanian, A Hossain;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://yadda.icm.edu.pl/baztech/element/bwmeta1.element.baztech-article-LOD8-0002-0009" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    DHS: A Data Handover Scheme for Lifetime Enhancement of Wireless Sensor Networks
                  </a>
                </h3>
                <p className="text-white/50 mb-3">Journal of Applied Computer Science, pp 23-41, Volume 16, No. 2, 2008.</p>
                <p className="text-white/70">Bhattacharyya, Abhishek; Seetharam, Anand; Naskar, MK;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://ieeexplore.ieee.org/document/4554386/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Estimation of node density for an energy efficient deployment scheme in wireless sensor network
                  </a>
                </h3>
                <p className="text-white/50 mb-3">2008 3rd International Conference on Communication Systems Software and Middleware and Workshops (COMSWARE'08)</p>
                <p className="text-white/70">Seetharam, Anand; Bhattacharyya, Abhishek; Naskar, Mrinal K; Mukherjee, Amitava;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://digital-library.theiet.org/doi/10.1049/ic%3A20070743" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    A position based algorithm for topology management in Mobile Ad-Hoc Networks enduring limited transmission failures
                  </a>
                </h3>
                <p className="text-white/50 mb-3">2007 IET-UK International Conference on Information and Communication Technology in Electrical Sciences (ICTES 2007)</p>
                <p className="text-white/70">Seetharam, Anand; Bhattacharyya, Abhishek; Naskar, MK;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://arxiv.org/abs/1204.2882" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Designing an Energy Efficient Framework for Data Gathering in Wireless Sensor Network
                  </a>
                </h3>
                <p className="text-white/50 mb-3">International Congress for Global Science and Technology (ICGST), Journal of Computer Network and Internet Research (CNIR)</p>
                <p className="text-white/70">Mukherjee, Subhabrata; Seetharam, Anand; Bhattacharyya, Abhishek; Naskar, Mrinal K; Mukherjee, Amitava;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://etrx.spit.ac.in/wp-content/blogs.dir/19/files/2012/ieee_colloquium/Communication_and_Networking/spit-296.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    A Balanced Energy Dissipation Scheme for Enhanced Performance in Data Gathering Wireless Sensor Networks
                  </a>
                </h3>
                <p className="text-white/50 mb-3">SPIT-IEEE Colloquium and International Conference, Mumbai, India</p>
                <p className="text-white/70">Acharya, Ayan; Seetharam, Anand; Bhattacharyya, Abhishek; Naskar, Mrinal K;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://ieeexplore.ieee.org/document/4475747" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Lifetime enhancement in wireless sensor networks through selective data handover
                  </a>
                </h3>
                <p className="text-white/50 mb-3">2007 Third International Conference on Wireless Communication and Sensor Networks</p>
                <p className="text-white/70">Bhattacharyya, Abhishek; Seetharam, Anand; Dasgupta, Sulagna; Das, Debjyoti; Mitra, Swarup; Naskar, MK;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://www.tdcommons.org/cgi/viewcontent.cgi?article=2878&context=dpubs_series" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Machine Learning Framework for Prioritiizing Location Measurement of Multiple Devices
                  </a>
                </h3>
                <p className="text-white/50 mb-3">Technical Disclosure Commons</p>
                <p className="text-white/70">Zhang, Xu; Tran, Huy; Silverman, Matt; Mukherji, Abhishek; Raghuram, Vinay; Bhattacharyya, Abhishek; and Pandey, Santosh;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://openurl.ebsco.com/EPDB%3Agcd%3A6%3A18846262/detailv2?sid=ebsco%3Aocu%3Arecord&id=ebsco%3Agcd%3A51003372&bquery=IS%201844-6043%20AND%20VI%202%20AND%20IP%202%20AND%20DT%202009&page=1&link_origin=scholar.google.com&searchDescription=Journal%20of%20Computer%20Science" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Energy Efficient Deployment Strategy for Lifetime Enhancement in Sensor Networks
                  </a>
                </h3>
                <p className="text-white/50 mb-3">Journal of Computer Science & Control Systems</p>
                <p className="text-white/70">Seetharam, Anand; Bhattacharyya, Abhishek; Chakrabarti, Saswat;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://www.semanticscholar.org/paper/An-Energy-Efficient-Data-Gathering-Protocol-for-Seetharam-Acharya/67b4bf340e9c75d4f337e1a257e8526a8139a3ee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    An energy efficient data gathering protocol for wireless sensor networks
                  </a>
                </h3>
                <p className="text-white/50 mb-3">Journal of Applied Computer Science</p>
                <p className="text-white/70">Seetharam, A; Acharya, A; Bhattacharyya, A; Naskar, MK;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://web.cecs.pdx.edu/~nbulusu/papers/hotmobile16.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Glimpsing into the future: An accurate wifi-based client count prediction algorithm
                  </a>
                </h3>
                <p className="text-white/50 mb-3">17th IEEE International Workshop on Mobile Computing Systems and Applications, ACM Hotmobile</p>
                <p className="text-white/70">Tran, Huy; Pandey, Santosh; Bhattacharyya, Abhishek; Natarajan, Preethi; Bulusu, Nirupama;</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://www.atsinternationaljournal.com/index.php/2009-issues/xix-november-2009/444-information-based-predictive-congestion-control-for-intelligent-transportation-management" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Information-based predictive congestion control for intelligent transportation management
                  </a>
                </h3>
                <p className="text-white/50 mb-3">Advances in Transportation Studies</p>
                <p className="text-white/70">Bhattacharyya, A; Seetharam, A; Naskar, MK;</p>
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

          {/* Awards Section */}
          <section id="awards" className="mb-32 section-fade scroll-mt-20">
            <div className="flex items-center mb-12">
              <Award className="w-6 h-6 mr-3" />
              <h2 className="text-3xl font-light tracking-tight">Awards</h2>
            </div>
            <div className="card p-8 rounded-2xl">
              <ul className="list-disc list-inside space-y-4 text-white/70">
                <li>W. Noel Eldred Memorial Fellowship, Stanford University</li>
                <li>Erasmus Mundus Grant, Education, Audiovisual, Culture Executive Agency, European Union</li>
                <li>Prof. Jnansaran Chatterjee Memorial Gold Medal, Department of Electronics and Telecommunications Engineering, Jadavpur University</li>
                <li>Best Paper Award, 14th West Bengal Science and Technology Congress, 2007 by Department of Science and Technology, Government of West Bengal, India</li>
                <li>Senior Scholar, JBNSTS, India</li>
              </ul>
            </div>
          </section>

          {/* Talks Section */}
          <section id="talks" className="mb-32 section-fade scroll-mt-20">
            <div className="flex items-center mb-12">
              <Newspaper className="w-6 h-6 mr-3" />
              <h2 className="text-3xl font-light tracking-tight">Talks</h2>
            </div>
            <div className="space-y-8">
            <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">
                  <a 
                    href="https://events.vtools.ieee.org/m/482449" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Scaling Enterprise IoT
                  </a>
                </h3>
                <p className="text-white/50 mb-3">IEEE Communications Society, Santa Clara Valley Section Chapter, Santa Clara University</p>
                <p className="text-white/70">May 1, 2025</p>
              </div>
              <div className="card p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-3">Enterprise IoT And Associated Challenges</h3>
                <p className="text-white/50 mb-3">Amity School of Engineering and Technology, Amity University, India</p>
                <p className="text-white/70">November 22, 2021</p>
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