import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const technologies = [
  {
    name: "WordPress Development",
    description:
      "Bringing revolutionary changes for the global audience by leveraging the phenomenal offering of WordPress development to enhance their user experience.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Drupal Development",
    description:
      "Leveraging Drupal to develop and deliver robust architecture and responsive functionalities for custom, scalable, and secure web application development requirements.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Laravel Development",
    description:
      "Get custom Laravel development service from our experts who are well-known for their technical expertise to integrate top-notch features and functionalities and deliver the most user-friendly solutions for simple to complex web development requirements.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "React Development",
    description:
      "Building interactive and dynamic user interfaces with React, ensuring high performance and seamless user experiences across various devices and platforms.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Vue.js Development",
    description:
      "Crafting modern, lightweight, and progressive web applications using Vue.js, perfect for both small and large-scale projects with its flexible and scalable architecture.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Node.js Development",
    description:
      "Harnessing the power of Node.js for building fast, scalable, and efficient server-side applications and APIs, enabling real-time functionality and microservices architecture.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Python Development",
    description:
      "Utilizing Python's versatility for web development, data analysis, machine learning, and automation, delivering robust and scalable solutions across various domains.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Ruby on Rails Development",
    description:
      "Rapid application development with Ruby on Rails, focusing on convention over configuration to build feature-rich web applications quickly and efficiently.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Angular Development",
    description:
      "Creating powerful single-page applications with Angular, leveraging its comprehensive framework for building complex, feature-rich front-end solutions with excellent performance.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function DeveloperCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the second element to handle clone
  const length = technologies.length;
  const transitionRef = useRef();

  // Clone first and last slides
  const clonedSlides = [
    technologies[length - 1],
    ...technologies,
    technologies[0],
  ];

  const nextSlide = () => {
    if (currentIndex >= length) {
      // If we're at the cloned last slide, instantly go to the real first slide
      setCurrentIndex(1);
      transitionRef.current.style.transition = "none"; // Temporarily disable transition
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      // If we're at the cloned first slide, instantly go to the real last slide
      setCurrentIndex(length);
      transitionRef.current.style.transition = "none"; // Temporarily disable transition
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (currentIndex === 1 || currentIndex === length) {
      // Add smooth transition back after setting the position
      setTimeout(() => {
        transitionRef.current.style.transition = "transform 0.3s ease-in-out";
      }, 50); // Small delay to allow the DOM to update position
    }
  }, [currentIndex]);

  const [active, setActive] = useState("Design agencies");

  const getBackgroundPosition = () => {
    switch (active) {
      case "Design agencies":
        return "left-2";
      case "SaaS Companies":
        return "left-1/3";
      case "Web Development Agencies":
        return "left-2/3";
      default:
        return "left-2";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* PART-01 START */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="mx-auto max-w-xl text-center text-3xl font-bold md:text-2xl mb-8 md:mb-12 lg:mb-16 text-red-500">
            Custom Web Development Services Empowering Business Revolution
          </h2>
          {/* Content */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row md:justify-between items-center">
              <div className="flex flex-col gap-6">
                <div className="h-11 w-11">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.30104 7.5C4.03162 7.97242 4.02713 8.54509 4.01813 9.69042L4 12L4.01813 14.3096C4.02713 15.4549 4.03162 16.0276 4.30104 16.5C4.57046 16.9724 5.05809 17.2627 6.03336 17.8432L8 19.0139L9.98478 20.1528C10.969 20.7176 11.4612 21 12 21M4.30104 7.5C4.57046 7.02758 5.05809 6.7373 6.03336 6.15675L8 4.98606L9.98478 3.84717C10.969 3.28239 11.4612 3 12 3C12.5388 3 13.031 3.28239 14.0152 3.84717L16 4.98606L17.9666 6.15675C18.9419 6.7373 19.4295 7.02758 19.699 7.5M4.30104 7.5L12 12M12 21C12.5388 21 13.031 20.7176 14.0152 20.1528L16 19.0139L17.9666 17.8432C18.9419 17.2627 19.4295 16.9724 19.699 16.5C19.9684 16.0276 19.9729 15.4549 19.9819 14.3096L20 12L19.9819 9.69042C19.9729 8.54509 19.9684 7.97242 19.699 7.5M12 21V12M19.699 7.5L12 12"
                      stroke="#a30000"
                      stroke-width="1"
                      class="my-path"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg text-blue-600 font-semibold mb-4">
                    Fullstack Development
                  </h3>
                  <p className=" max-w-md">
                    Get Full-stack development services from a team of top web
                    developers to leverage their expertise to build lightweight,
                    feature-rich, smooth-running, interactive web solutions.
                  </p>
                </div>
              </div>

              <div className="mt-5 md:mr-5 md:mt-5 pl-5">
                <img src="https://www.revenueriver.co/hubfs/fullstack.jpeg" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#a30000"
                    stroke-width="1"
                    class="my-path"
                  ></path>
                  <path
                    d="M6.00141 5.5C6.00141 6.25493 7.51697 7.27799 9.50808 7.27799C10.1718 7.27799 11.0014 8.04173 11.0014 8.79666C11.0014 9.55158 10.1718 10.3153 9.50808 10.3153C8.84437 10.3153 7.7866 10.5864 7.7866 11.7943C7.50141 13.5 5.79153 13.318 3.13672 13.0161"
                    stroke="#a30000"
                    stroke-width="1"
                    stroke-linecap="round"
                    class="my-path"
                  ></path>
                  <path
                    d="M18 18.5001C18 17.7452 16.4844 16.9239 14.4933 16.9239C13.8296 16.9239 13 16.1601 13 15.4052C13 14.6503 13.8296 13.8866 14.4933 13.8866C15.157 13.8866 16.2148 13.6154 16.2148 12.4076C16.5 10.7019 18.2399 10.8902 20.8947 11.1921"
                    stroke="#a30000"
                    stroke-width="1"
                    stroke-linecap="round"
                    class="my-path"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg text-blue-700 font-semibold mb-4">
                  Front-end Development
                </h3>
                <p className="">
                  Offer the most unique, elegant, and authoritative user
                  experience with stunning graphical representation leveraging
                  the Front-end development capabilities of a top website
                  development company.
                </p>
              </div>
            </div>
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 3V5.63636C16 6.38948 16.6105 7 17.3636 7H20"
                    stroke="#a30000"
                    stroke-width="1"
                    class="my-path"
                  ></path>
                  <path
                    d="M7 11H13"
                    stroke="#a30000"
                    stroke-width="1"
                    stroke-linecap="round"
                    class="my-path"
                  ></path>
                  <path
                    d="M7 15H11"
                    stroke="#a30000"
                    stroke-width="1"
                    stroke-linecap="round"
                    class="my-path"
                  ></path>
                  <path
                    d="M7 7H11"
                    stroke="#a30000"
                    stroke-width="1"
                    stroke-linecap="round"
                    class="my-path"
                  ></path>
                  <path
                    d="M18.0746 13.995L14.8423 17.272C14.6397 17.4773 14.5385 17.5799 14.4712 17.7046C14.4039 17.8293 14.3741 17.9695 14.3145 18.2498L14.0011 19.7236C13.9718 19.8612 13.9572 19.93 13.9968 19.9681C14.0364 20.0062 14.1058 19.99 14.2445 19.9576L15.7466 19.6069C16.021 19.5428 16.1582 19.5108 16.2799 19.4441C16.4016 19.3774 16.5017 19.2794 16.7018 19.0834L19.9889 15.8644C20.2082 15.6496 20.3179 15.5422 20.3845 15.4296C20.5613 15.1307 20.5677 14.7626 20.4013 14.4581C20.3387 14.3433 20.2327 14.2324 20.0209 14.0104C19.7953 13.774 19.6825 13.6558 19.5641 13.5854C19.2495 13.3983 18.8564 13.3952 18.5386 13.5773C18.419 13.6458 18.3042 13.7622 18.0746 13.995Z"
                    stroke="#a30000"
                    stroke-width="1"
                    class="my-path"
                  ></path>
                  <path
                    d="M19 17L17 15"
                    stroke="#a30000"
                    stroke-width="1"
                    class="my-path"
                  ></path>
                  <path
                    d="M11 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V9C4 6.17157 4 4.75736 4.87868 3.87868C5.75736 3 7.17157 3 10 3H15.3431C16.1606 3 16.5694 3 16.9369 3.15224C17.3045 3.30448 17.5935 3.59351 18.1716 4.17157L18.8284 4.82843C19.4065 5.40647 19.6955 5.69552 19.8478 6.06306C20 6.4306 20 6.83935 20 7.65685V11"
                    stroke="#a30000"
                    stroke-width="1"
                    stroke-linecap="round"
                    class="my-path"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg text-blue-600 font-semibold mb-4">
                  Back-end Development
                </h3>
                <p className="0">
                  Utilize our back-end development expertise to build refined
                  and strong server-side codes, complex functional protocols,
                  libraries, and other development components to offer smooth
                  performance for your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART-02 START */}

      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="flex flex-col items-center">
            {/* Heading Div */}
            <div className="mb-8 max-w-3xl text-center">
              <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl text-red-500 ">
                Get inspired
              </h2>
              <p className="mx-auto mt-4 ">
                See how design and website agencies use Flowspark
              </p>

              {/* Select */}
              {/* <div className="relative mx-auto flex-col md:flex-row mt-8 flex w-fit cursor-pointer rounded-xl bg-gray-100 md:mt-12">
                <div
                  onClick={() => setActive("Design agencies")}
                  className={`relative rounded-lg px-5 py-2 ${
                    active === "Design agencies"
                      ? "bg-black text-white"
                      : "text-gray-500"
                  }`}
                >
                  Design agencies
                </div>
                <div
                  onClick={() => setActive("SaaS Companies")}
                  className={`relative rounded-lg px-5 py-2 ${
                    active === "SaaS Companies"
                      ? "bg-black text-white"
                      : "text-gray-500"
                  }`}
                >
                  SaaS Companies
                </div>
                <div
                  onClick={() => setActive("Web Development Agencies")}
                  className={`relative rounded-lg px-5 py-2 ${
                    active === "Web Development Agencies"
                      ? "bg-black text-white"
                      : "text-gray-500"
                  }`}
                >
                  Web Development Agencies
                </div>
              </div> */}
            </div>
            {/* Blog Content */}
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Blog Item */}
              <a
                href="/"
                className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
              >
                <img
                  src="https://img.freepik.com/free-vector/flat-design-cms-illustration_23-2148825220.jpg?t=st=1728548187~exp=1728551787~hmac=5720ad8e20eb0d937bd3657f483a2c6fb5f675f923b43cfa6569721bab4f2a7c&w=900"
                  className="inline-block h-60 w-full rounded-2xl object-cover"
                />
                <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                  <div className="mb-2 flex flex-col items-start gap-2">
                    <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                      <p>Web Development</p>
                    </div>
                    {/* <p className="text-lg font-bold md:text-2xl">Hero banner</p> */}
                  </div>
                  <p className="text-sm max-w-72">
                    Web Development bring your ideas to life with our expertise
                    in web development, creating masterpieces that elevate your
                    brand.
                  </p>
                </div>
              </a>
              {/* Blog Item */}
              <a
                href="/"
                className="h-ax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2"
              >
                <img
                  src="https://img.freepik.com/free-vector/mobile-browsers-concept-illustration_114360-1267.jpg?t=st=1728548255~exp=1728551855~hmac=8f5d82e878cc5032e7053a8d3cc6f3a3a1b377b65761147cc960e3eb5962d4e8&w=740"
                  className="inline-block h-60 w-full rounded-2xl object-cover"
                />
                <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                  <div className="mb-2 flex flex-col items-start gap-2">
                    <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                      <p>Mobile Application</p>
                    </div>
                    {/* <p className="text-lg font-bold md:text-2xl">Hero banner</p> */}
                  </div>
                  <p className="text-sm max-w-72">
                    Mobile apps serve a wide range of purposes, from
                    productivity tools to entertainment, communication, and
                    social interaction.
                  </p>
                </div>
              </a>
              {/* Blog Item */}
              <a
                href="/"
                className="hmax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2"
              >
                <img
                  src="https://img.freepik.com/premium-vector/ui-ux-design-abstract-concept-vector-illustration_107173-25087.jpg?w=740"
                  className="inline-block h-60 w-full rounded-2xl object-cover"
                />
                <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                  <div className="mb-2 flex flex-col items-start gap-2">
                    <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                      <p>UI/UX</p>
                    </div>
                    <p className="text-lg font-bold md:text-2xl"> </p>
                  </div>
                  <p className="text-sm max-w-72">
                    The Art of UI and UX are two essential elements in the
                    design of digital products, especially mobile apps and
                    websites.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* PART-03 START */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-3xl mb-8 md:mb-12 lg:mb-16 text-red-500">
            Industry-Specific Software Solutions
          </h2>
          {/* Content */}
          <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3">
            {/* Item */}
            <a
              href="#"
              className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
            >
              <div className="flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">
                  Healthcare Solution Development
                </h5>
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
              </div>

              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Healthcare App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Fitness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Wellness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Mental Health App
                    </span>
                  </li>
                </ul>
              </div>
            </a>

            {/* Item */}
            <a
              href="#"
              className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
            >
              <div className="flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">
                  Restaurant Solution Development
                </h5>
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
              </div>

              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Healthcare App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Fitness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Wellness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Mental Health App
                    </span>
                  </li>
                </ul>
              </div>
            </a>
            {/* Item */}
            <a
              href="#"
              className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
            >
              <div className="flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">
                  Manufacturing Solution Development
                </h5>
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
              </div>

              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Healthcare App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Fitness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Wellness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Mental Health App
                    </span>
                  </li>
                </ul>
              </div>
            </a>
            {/* Item */}
            <a
              href="#"
              className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
            >
              <div className="flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">
                  Travel Solution Development
                </h5>
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
              </div>

              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Healthcare App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Fitness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Wellness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Mental Health App
                    </span>
                  </li>
                </ul>
              </div>
            </a>
            {/* Item */}
            <a
              href="#"
              className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
            >
              <div className="flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">
                  Agriculture Solution Development
                </h5>
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
              </div>

              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Healthcare App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Fitness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Wellness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Mental Health App
                    </span>
                  </li>
                </ul>
              </div>
            </a>
            {/* Item */}
            <a
              href="#"
              className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
            >
              <div className="flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">
                  Retail Solution Development
                </h5>
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
              </div>

              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Healthcare App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Fitness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Wellness App Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                    <span className="text-gray-700 group-hover:text-red-500 transition">
                      Mental Health App
                    </span>
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* PART-04 START */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <p className="text-center text-sm font-bold uppercase text-blue-800">
            Ways To Leverage
          </p>
          <h2 className="text-center text-3xl font-bold md:text-5xl text-red-500">
            Our Development Expertise
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm sm:text-base md:mb-12 lg:mb-16">
            Offering a wide range of partnership models to connect with us and
            leverage our development capabilities to achieve much-anticipated
            success.
          </p>
          {/* Content */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* List */}
            <div className="flex h-full flex-col [grid-area:2/1/3/2] lg:[grid-area:1/2/2/3]">
              {/* Item */}
              <a
                className="mb-8 flex max-w-lg justify-center gap-4 rounded-xl border border-solid border-gray-300 px-6 py-5 text-black"
                href="#w-tabs-0-data-w-pane-0"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                  <p className="text-sm font-bold sm:text-base text-blue-800">
                    1
                  </p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <h5 className="text-xl font-bold text-blue-800">
                    Fixed Price Model
                  </h5>
                  <p className="text-sm text-gray-500">
                    The development team works with a predefined scope of work
                    with its associated cost and a timeline.
                  </p>
                </div>
              </a>
              {/* Item */}
              <a
                className="mb-8 flex max-w-lg justify-center gap-4 rounded-xl border border-solid border-gray-300 px-6 py-5 text-black"
                href="#w-tabs-0-data-w-pane-1"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                  <p className="text-sm font-bold sm:text-base text-blue-800">
                    2
                  </p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <h5 className="text-xl font-bold text-blue-800">
                    Hire Dedicated Model
                  </h5>
                  <p className="text-sm text-gray-500">
                    Hire a dedicated team of developers to work on your unique
                    development requirements and pay them based on an hourly
                    rate.
                  </p>
                </div>
              </a>
              {/* Item */}
              <a
                className="mb-8 flex max-w-lg justify-center gap-4 rounded-xl border border-solid border-gray-300 px-6 py-5 text-black"
                href="#w-tabs-0-data-w-pane-2"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                  <p className="text-sm font-bold sm:text-base text-blue-800">
                    3
                  </p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <h5 className="text-xl font-bold text-blue-800">
                    Onsite Model
                  </h5>
                  <p className="text-sm text-gray-500">
                    Hire a team of developers on a contract basis to get
                    additional temporary resources for on-site development
                    support.
                  </p>
                </div>
              </a>
            </div>
            {/* Image */}
            <img
              src="https://trainingmag.com/wp/wp-content/uploads/2021/12/01feature-narayanan.jpg"
              className="block h-full w-full overflow-hidden [grid-area:1/1/2/2] lg:[grid-area:1/1/2/2]"
            />
          </div>
        </div>
      </section>
      {/* PART-05 START */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl text-red-500">
            Custom Software Development Lifecycle
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-center  md:mb-12 lg:mb-16">
            Customizing and delivering cutting-edge solutions employing the
            custom software development lifecycle to help businesses meet their
            future demands
          </p>{" "}
          {/* Content */}{" "}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
            {" "}
            {/* Item */}{" "}
            <div className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              {/* <img
						 src=""
						 alt=""
							className="inline-block h-16 w-16 rounded-full object-cover"
						/> */}
              <svg
                width="39px"
                height="39px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 21L10 21"
                  stroke="#3232bd"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  class="my-path"
                ></path>
                <path
                  d="M12 6C9.23858 6 7 8.23858 7 11C7 12.6383 7.78795 14.0926 9.00556 15.0045C9.4969 15.3725 9.74258 15.5565 9.83968 15.7067C9.88955 15.7838 9.90623 15.8171 9.93805 15.9032C10 16.071 10 16.2931 10 16.7374C10 17.4516 10 17.8088 10.1741 18.0638C10.2444 18.1667 10.3333 18.2556 10.4362 18.3259C10.6912 18.5 11.0484 18.5 11.7626 18.5H12.2374C12.9516 18.5 13.3088 18.5 13.5638 18.3259C13.6667 18.2556 13.7556 18.1667 13.8259 18.0638C14 17.8088 14 17.4516 14 16.7374C14 16.2931 14 16.071 14.062 15.9032C14.0938 15.8171 14.1104 15.7838 14.1603 15.7067C14.2574 15.5565 14.5031 15.3725 14.9944 15.0045C16.212 14.0926 17 12.6383 17 11C17 8.23858 14.7614 6 12 6Z"
                  stroke="#3232bd"
                  stroke-width="1.7"
                  class="my-path"
                ></path>
                <path
                  d="M12 2V3"
                  stroke="#3232bd"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  class="my-path"
                ></path>
                <path
                  d="M21 10L20 10"
                  stroke="#3232bd"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  class="my-path"
                ></path>
                <path
                  d="M3 10L4 10"
                  stroke="#3232bd"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  class="my-path"
                ></path>
                <path
                  d="M19.0001 5L18.293 5.70711"
                  stroke="#3232bd"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  class="my-path"
                ></path>
                <path
                  d="M5 5L5.70711 5.70711"
                  stroke="#3232bd"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  class="my-path"
                ></path>
              </svg>
              <p className="text-xl font-semibold text-red-600">Ideation</p>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Item */}
            <div className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              {/* <img
						 src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
						 alt=""
							className="inline-block h-16 w-16 rounded-full object-cover"
						/> */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.19728 5.37752C9.19728 4.93569 9.55545 4.57752 9.99728 4.57752L20.9973 4.57752C21.4391 4.57752 21.7973 4.93569 21.7973 5.37752C21.7973 5.81935 21.4391 6.17752 20.9973 6.17752L9.99728 6.17752C9.55545 6.17752 9.19728 5.81935 9.19728 5.37752Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.19728 12.3775C9.19728 11.9357 9.55545 11.5775 9.99728 11.5775L20.9973 11.5775C21.4391 11.5775 21.7973 11.9357 21.7973 12.3775C21.7973 12.8194 21.4391 13.1775 20.9973 13.1775L9.99728 13.1775C9.55545 13.1775 9.19728 12.8194 9.19728 12.3775Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.19728 19.3775C9.19728 18.9357 9.55545 18.5775 9.99728 18.5775L20.9973 18.5775C21.4391 18.5775 21.7973 18.9357 21.7973 19.3775C21.7973 19.8194 21.4391 20.1775 20.9973 20.1775H9.99728C9.55545 20.1775 9.19728 19.8193 9.19728 19.3775Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.47934 17.1422C7.79176 17.4546 7.79176 17.9612 7.47934 18.2736L4.89534 20.8576C4.74531 21.0076 4.54183 21.0919 4.32966 21.0919C4.11748 21.0919 3.914 21.0076 3.76397 20.8576L2.43353 19.5271C2.12111 19.2147 2.12111 18.7082 2.43353 18.3958C2.74595 18.0833 3.25248 18.0833 3.5649 18.3958L4.32966 19.1605L6.34797 17.1422C6.66038 16.8298 7.16692 16.8298 7.47934 17.1422Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.47934 10.1422C7.79176 10.4546 7.79176 10.9612 7.47934 11.2736L4.89534 13.8576C4.74531 14.0076 4.54183 14.0919 4.32966 14.0919C4.11748 14.0919 3.914 14.0076 3.76397 13.8576L2.43353 12.5271C2.12111 12.2147 2.12111 11.7082 2.43353 11.3958C2.74595 11.0833 3.25248 11.0833 3.5649 11.3958L4.32966 12.1605L6.34797 10.1422C6.66038 9.82978 7.16692 9.82978 7.47934 10.1422Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.47934 3.14227C7.79176 3.45469 7.79176 3.96122 7.47934 4.27364L4.89534 6.85764C4.74531 7.00767 4.54183 7.09195 4.32966 7.09195C4.11748 7.09195 3.914 7.00767 3.76397 6.85764L2.43353 5.5272C2.12111 5.21478 2.12111 4.70825 2.43353 4.39583C2.74595 4.08341 3.25248 4.08341 3.5649 4.39583L4.32966 5.16058L6.34797 3.14227C6.66038 2.82985 7.16692 2.82985 7.47934 3.14227Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
              </svg>
              <p className="text-xl font-semibold text-red-600">Plan</p>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Item */}
            <div className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              {/* <img
						 src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
						 alt=""
							className="inline-block h-16 w-16 rounded-full object-cover"
						/> */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1409 3.77713C18.8302 3.47831 18.542 3.2012 18.2762 3.00643C17.9817 2.79067 17.6237 2.60568 17.1734 2.61146C16.723 2.61724 16.3699 2.81136 16.081 3.03461C15.8203 3.23615 15.5393 3.52056 15.2364 3.82726L14.6562 4.41448L19.5336 9.29189L20.194 8.6235C20.4968 8.3171 20.778 8.03263 20.9757 7.77002C21.1944 7.47971 21.3864 7.12132 21.3805 6.66704C21.3747 6.21277 21.1736 5.85942 20.9476 5.57482C20.7431 5.31737 20.4548 5.04023 20.1442 4.7417L19.1409 3.77713Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  d="M7.44939 11.7085L13.5316 5.55265L18.409 10.4301L12.4068 16.5049L12.3621 16.5503C12.1824 16.7331 11.9829 16.9361 11.7257 17.0696C11.4692 17.2026 11.1882 17.2496 10.9339 17.2922L10.8706 17.3028L9.71961 17.4982C9.14267 17.5962 8.6263 17.6839 8.21 17.6941C7.76297 17.7051 7.25498 17.6344 6.84622 17.2414C6.4348 16.8459 6.34799 16.3398 6.34766 15.8925C6.34735 15.4793 6.42329 14.9658 6.50756 14.3959L6.67626 13.2542L6.68545 13.1912C6.72192 12.9398 6.76293 12.6571 6.89301 12.3973C7.02269 12.1382 7.22417 11.9353 7.40422 11.754L7.44939 11.7085Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  d="M2.99922 20.2002C2.55739 20.2002 2.19922 20.5584 2.19922 21.0002C2.19922 21.442 2.55739 21.8002 2.99922 21.8002H20.9992C21.441 21.8002 21.7992 21.442 21.7992 21.0002C21.7992 20.5584 21.441 20.2002 20.9992 20.2002H2.99922Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
              </svg>
              <p className="text-xl font-semibold text-red-600">Design</p>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Item */}
            <div className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              {/* <img
						 src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
						 alt=""
							className="inline-block h-16 w-16 rounded-full object-cover"
						/> */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.20117 3.99971C9.20117 3.00559 10.0071 2.19971 11.0012 2.19971H13.0012C13.9953 2.19971 14.8012 3.00559 14.8012 3.99971V5.99971C14.8012 6.99382 13.9953 7.79971 13.0012 7.79971H11.0012C10.0071 7.79971 9.20117 6.99382 9.20117 5.99971V3.99971Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  d="M6.00117 12.1997C4.45477 12.1997 3.20117 13.4533 3.20117 14.9997V15.9997C3.20117 16.4415 3.55934 16.7997 4.00117 16.7997C4.443 16.7997 4.80117 16.4415 4.80117 15.9997V14.9997C4.80117 14.337 5.33843 13.7997 6.00117 13.7997H11.2012V15.9997C11.2012 16.4415 11.5593 16.7997 12.0012 16.7997C12.443 16.7997 12.8012 16.4415 12.8012 15.9997V13.7997H18.0012C18.6639 13.7997 19.2012 14.337 19.2012 14.9997V15.9997C19.2012 16.4415 19.5593 16.7997 20.0012 16.7997C20.443 16.7997 20.8012 16.4415 20.8012 15.9997V14.9997C20.8012 13.4533 19.5476 12.1997 18.0012 12.1997H12.8012V9.99971C12.8012 9.55788 12.443 9.19971 12.0012 9.19971C11.5593 9.19971 11.2012 9.55788 11.2012 9.99971V12.1997H6.00117Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  d="M2.20117 19.9997C2.20117 19.0056 3.00706 18.1997 4.00117 18.1997C4.99528 18.1997 5.80117 19.0056 5.80117 19.9997C5.80117 20.9938 4.99528 21.7997 4.00117 21.7997C3.00706 21.7997 2.20117 20.9938 2.20117 19.9997Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  d="M12.0012 18.1997C11.0071 18.1997 10.2012 19.0056 10.2012 19.9997C10.2012 20.9938 11.0071 21.7997 12.0012 21.7997C12.9953 21.7997 13.8012 20.9938 13.8012 19.9997C13.8012 19.0056 12.9953 18.1997 12.0012 18.1997Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  d="M18.2012 19.9997C18.2012 19.0056 19.0071 18.1997 20.0012 18.1997C20.9953 18.1997 21.8012 19.0056 21.8012 19.9997C21.8012 20.9938 20.9953 21.7997 20.0012 21.7997C19.0071 21.7997 18.2012 20.9938 18.2012 19.9997Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
              </svg>
              <p className="text-xl font-semibold text-red-600">Implement</p>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Item */}
            <div className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              {/* <img
						 src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
						 alt=""
							className="inline-block h-16 w-16 rounded-full object-cover"
						/> */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.79922 21.0004L7.79922 17.7161C9.51375 17.3487 10.7992 15.8247 10.7992 14.0004C10.7992 11.9017 9.0979 10.2004 6.99922 10.2004C4.90054 10.2004 3.19922 11.9017 3.19922 14.0004C3.19922 15.8247 4.48468 17.3487 6.19922 17.7161V21.0004C6.19922 21.4422 6.55739 21.8004 6.99922 21.8004C7.44105 21.8004 7.79922 21.4422 7.79922 21.0004Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  d="M17.8008 6.28511C19.5145 6.65308 20.7992 8.17672 20.7992 10.0004C20.7992 12.0991 19.0979 13.8004 16.9992 13.8004C14.9005 13.8004 13.1992 12.0991 13.1992 10.0004C13.1992 8.17561 14.4855 6.65123 16.2008 6.28444L16.2008 3.00032C16.2008 2.55849 16.559 2.20032 17.0008 2.20032C17.4426 2.20032 17.8008 2.55849 17.8008 3.00032L17.8008 6.28511Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  d="M6.99922 8.80042C6.55739 8.80042 6.19922 8.44224 6.19922 8.00042L6.19922 3.00042C6.19922 2.55859 6.55739 2.20042 6.99922 2.20042C7.44105 2.20042 7.79922 2.55859 7.79922 3.00041L7.79922 8.00042C7.79922 8.44224 7.44105 8.80042 6.99922 8.80042Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
                <path
                  d="M17.8008 16.0003C17.8008 15.5585 17.4426 15.2003 17.0008 15.2003C16.559 15.2003 16.2008 15.5585 16.2008 16.0003V21.0003C16.2008 21.4421 16.559 21.8003 17.0008 21.8003C17.4426 21.8003 17.8008 21.4421 17.8008 21.0003V16.0003Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
              </svg>
              <p className="text-xl font-semibold text-red-600">Test</p>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* Item */}
            <div className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              {/* <img
						 src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
						 alt=""
							className="inline-block h-16 w-16 rounded-full object-cover"
						/> */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8031 7.42011C21.8174 7.19846 21.7398 6.972 21.5704 6.80262C21.4108 6.6431 21.2007 6.56505 20.9916 6.56847L14.5187 6.56847C14.0769 6.56847 13.7188 6.92664 13.7188 7.36847C13.7188 7.8103 14.0769 8.16847 14.5188 8.16847L19.0735 8.16847L13.2703 13.9728L9.46381 10.1663C9.31378 10.0162 9.1103 9.93195 8.89813 9.93195C8.68595 9.93195 8.48247 10.0162 8.33244 10.1663L2.43353 16.0652C2.12111 16.3776 2.12111 16.8841 2.43353 17.1965C2.74595 17.509 3.25248 17.509 3.5649 17.1965L8.89813 11.8633L12.7047 15.6699C12.8547 15.8199 13.0582 15.9042 13.2704 15.9042C13.4826 15.9042 13.6861 15.8199 13.8361 15.6698L20.2031 9.30166V13.9466C20.2031 14.3884 20.5613 14.7466 21.0031 14.7466C21.4449 14.7466 21.8031 14.3884 21.8031 13.9466V7.42011Z"
                  fill="#3232bd"
                  class="my-path"
                ></path>
              </svg>
              <p className="text-xl font-semibold text-red-600">Deploy</p>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PART-06 START */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          The Development Proficiency of Our Website Developers
        </h2>
        <p className="text-lg text-gray-600">
          Leverage the tech expertise of a leading website development company
          to get fully functional custom web solutions.
        </p>
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={transitionRef} // Reference to manage smooth transitions
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {clonedSlides.map((tech, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4*. transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
