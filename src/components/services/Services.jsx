import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="service component__space" id="services">
    <div className="heading">
        <h1 className="heading">My Services</h1>
        
    </div>

    <div className="container">
        <div className="row">


            <div className="col__3">
                 <div className="service__box pointer">
                    <div className="icon">
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
            >
                <rect x="2" y="3" width="14" height="18" rx="2" ry="2"></rect>
                <path d="M16 7h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path>
                <line x1="12" y1="20" x2="12" y2="20"></line>
            </svg>
                    </div>
                    <div className="service__meta">
                        <h1 className="service__text">Cross-Platform Mobile Apps</h1>
                        <p className="p service__text p__color">
                        I develop a wide range of mobile applications, including e-commerce, social networking, and business apps using Flutter, Android, and iOS, focusing on client-specific requirements.                        </p>
                        
                    </div>
                 </div>
            </div>

            <div className="col__3">
                 <div className="service__box pointer">
                    <div className="icon">
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
            >
                <rect x="6" y="2" width="12" height="20" rx="2" ry="2"></rect>
                <path d="M11.5 18h1"></path>
                <path d="M9 5h6"></path>
                <path d="M9 8h6"></path>
            </svg>
                    </div>
                    <div className="service__meta">
                        <h1 className="service__text">Native Android and iOS Apps</h1>
                        <p className="p service__text p__color">
                      I create diverse native applications for Android using Kotlin and for iOS using Swift, designed for high performance while leveraging unique platform features.                        </p>
                        
                    </div>
                 </div>
            </div>

            <div className="col__3">
                 <div className="service__box pointer">
                    <div className="icon">
                    <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
                    </div>
                    <div className="service__meta">
                        <h1 className="service__text">On-Demand Apps</h1>
                        <p className="p service__text p__color">
                        I create on-demand service apps (e.g., food delivery, ride-hailing, and booking apps etc) with real-time tracking, user management, and payment gateway integrations.
                        </p>
                        
                    </div>
                 </div>
            </div>

            <div className="col__3">
                 <div className="service__box pointer">
                    <div className="icon">
                    <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
                    </div>
                    <div className="service__meta">
                        <h1 className="service__text">UI/UX Design and Prototyping</h1>
                        <p className="p service__text p__color">
                        I design and prototype mobile interfaces, focusing on clean, intuitive, and engaging user experiences for high user retention and increased engagement.
                        </p>
                       
                    </div>
                 </div>
            </div>

            <div className="col__3">
                 <div className="service__box pointer">
                    <div className="icon">
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
            >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a2 2 0 0 0 .4 2.6l.5.5a2 2 0 0 1-2.8 2.8l-.5-.5a2 2 0 0 0-2.6-.4"></path>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="M4.93 4.93l1.42 1.42"></path>
                <path d="M17.65 17.65l1.42 1.42"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="M4.93 19.07l1.42-1.42"></path>
                <path d="M17.65 6.35l1.42-1.42"></path>
            </svg>
                    </div>
                    <div className="service__meta">
                        <h1 className="service__text">App Maintenance & Optimization</h1>
                        <p className="p service__text p__color">
                        I provide ongoing support for existing apps, including performance enhancements, bug fixes, updates, and feature additions to keep your app competitive.
                        </p>
                    </div>
                 </div>
            </div>

            <div className="col__3">
  <div className="service__box pointer">
    <div className="icon">
      {/* API & Backend Integration Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
      >
        <path d="M10 13a4 4 0 0 1 0-5.66l3.34-3.34a4 4 0 0 1 5.66 5.66l-1.41 1.41"></path>
        <path d="M14 11a4 4 0 0 1 0 5.66l-3.34 3.34a4 4 0 0 1-5.66-5.66l1.41-1.41"></path>
      </svg>
    </div>
    <div className="service__meta">
      <h1 className="service__text">API & Backend Integration</h1>
      <p className="p service__text p__color">
        I implement backend systems and integrate REST APIs for real-time data syncing, authentication, and secure storage in apps like chat apps, fintech apps, and more.
      </p>
    </div>
  </div>
</div>
</div>
    </div>
</div>
)

  
}

export default Services;
