import React from 'react'

function Aboutus() {
  return (
    <div>
        {/* SET-01-START-HERE */}
  <header>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
           About Us
          </h1>
          {/* <p className="mb-6 text-sm text-gray-500 sm:text-xl lg:mb-8">
            Say goodbye to payment headaches with SecurePay! Our easy-to-use
            payment platform makes it simple for businesses and individuals to
            send and receive payments quickly and securely.
          </p> */}
          {/* Button */}
          <a
  href="#"
  className="mr-6 inline-flex items-center rounded-md px-8 py-4 text-center font-semibold text-gray-500 lg:mr-8"
>
 <span href="#">Home</span> 
  <span className="ml-2 flex items-center">
    <svg
      className="w-[24px] h-[24px] text-gray-500"  
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="m10 16 4-4-4-4"
      />
    </svg>
  </span>
  <span className="ml-2">About Us</span>
</a>


        </div>
        {/* List */}
        {/* <ul className="mt-16 grid gap-8 sm:mt-24 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-4">
          <li className="flex items-center justify-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FMicrosoft%20Logo.svg?alt=media&token=d9a0206b-8dfa-407e-af77-5c5d33abfbb3"
              alt=""
              className="inline-block h-9"
            />
          </li>
          <li className="flex justify-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPayPal%20Logo.svg?alt=media&token=73b2c12b-b86c-4e6c-8158-ea096d5bacb5"
              alt=""
              className="inline-block h-9"
            />
          </li>
          <li className="flex justify-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FGroup.svg?alt=media&token=a908887b-af31-4e54-997a-d5e4dc3be56a"
              alt=""
              className="inline-block h-9"
            />
          </li>
          <li className="flex justify-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FChase%20Logo.svg?alt=media&token=f179fc6d-e765-4969-8966-62ff6ec35e8f"
              alt=""
              className="inline-block h-9"
            />
          </li>
          <li className="flex justify-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FWalmart%20Logo.svg?alt=media&token=614d63e8-5961-4c97-8dc5-cf69669c3848"
              alt=""
              className="inline-block h-9"
            />
          </li>
        </ul> */}
      </div>
    </header>
   {/* Code-END-HERE */}
   <section>
  {/* Section Container */}
  <div className="flex flex-col items-center justify-center px-5 md:px-10">
    {/* Title Container */}
    <div className="flex min-w-[100vw] flex-col items-start bg-[#f2f2f7] py-16 sm:py-20 lg:items-center">
      {/* Component */}
      <div className="grid max-w-5xl px-10 lg:grid-cols-2">
  <div className="flex flex-col items-start self-center py-5">
    <h1 className="mb-4 text-3xl font-bold md:text-5xl text-blue-900">Who LugarPrime?</h1>
    <p className="mb-8 max-w-md flex-col text-sm text-red-600 sm:text-base">
    Innovate Tech for a Digital Future..!
    </p>
  </div>

  {/* Replace svg with img */}
  <img 
    src="src/assets/LP.png" 
    alt="Terms of Service Image" 
    className="w-[300px] h-[300px] pl-1" 
  />
</div>

    </div>
    {/* Terms Container */}
    <div className="mx-auto w-full max-w-5xl py-12 md:py-16 lg:py-20">
      {/* <p className="mb-5 text-base font-extrabold uppercase">Last updated as of October 17, 2022</p> */}
      <div className="mb-6 min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
      {/* Term */}
      <div className="mb-6 flex flex-col items-start gap-y-3">
        <p className="text-sm font-bold uppercase sm:text-base text-blue-800">OverView</p>
        <p className="text-sm sm:text-base">At LugarPrime, we specialize in bringing industry expertise to businesses seeking to expand, acquire new opportunities, and boost revenue. Our focus on strategy and management enables us to offer a range of services to help businesses achieve these goals, whether they're looking to enter new markets or increase their presence in their current market.</p>
      </div>
      {/* Term */}
      <div className="mb-6 flex flex-col items-start gap-y-3">
        {/* <p className="font-bold uppercase sm:text-base">Client Responsibilities</p> */}
        <p className="text-sm sm:text-base">We have extensive experience working across various industries and specialisms and offer services in operations, strategy, management, IT, finance, marketing, HR, and supply chain management. Our team of experts brings a wealth of knowledge to each project, offering customized solutions to meet the specific needs of each business we work with.</p>
      </div>
      {/* Term */}
      <div className="mb-6 flex flex-col items-start gap-y-3">
        {/* <p className="font-bold uppercase sm:text-base">Intellectual Property</p> */}
        <p className="text-sm sm:text-base">Our comprehensive services include business consultancy, digital transformation, digital marketing, website development, web hosting, and mobile app development. We understand the importance of staying ahead of the curve in today's fast-paced business environment, and we're committed to helping our clients leverage the latest technologies and strategies to achieve their goals.
        </p>
      </div>
      {/* Term */}
      <div className="mb-6 flex flex-col items-start gap-y-3">
        {/* <p className="font-bold uppercase sm:text-base">Payment</p> */}
        <p className="text-sm sm:text-base">Whether you're looking to streamline your operations, improve your marketing efforts, or develop a cutting-edge mobile app, our team of experts is here to help. Contact us today to learn more about how we can assist your business in achieving its objectives.</p>
      </div>
    
      {/* Term */}
      <div className="mb-10 mt-10 min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
      <p className="mb-6 text-sm sm:text-base">By accessing, browsing, or utilizing any design services, communication channels, or materials provided by Flowspark, including but not limited to graphic design, web design, branding, illustration, and user interface design, whether through our website, email, phone, or any other means, you expressly acknowledge, understand, and agree that you have carefully read, comprehended, and fully consent to be legally.</p>
    </div>
  </div>
</section>
    {/* SET-02-START-HERE */}
   <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="items-center text-center text-3xl font-bold md:text-5xl text-blue-900">
        Why LugarPrime?
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12 text-red-500">
        Empowering your business for better tomorrow.
        </p>
        {/* List */}
        <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://cdn4.iconfinder.com/data/icons/leto-business-people/64/__handshake_money_deal-256.png"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Trustworthy Relationship</p>
            <p className="text-center text-sm text-gray-500">
            Creating a trustworthy relationship is paramount, as it lays the foundation for delivering excellent service.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://cdn4.iconfinder.com/data/icons/celebrations-flat/64/party_popper_surprise_birthday_celebration-64.png"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Commitment to Satisfaction</p>
            <p className="text-center text-sm text-gray-500">
            Our focus is not only to provide a service, its emerged with the client satisfaction.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://cdn3.iconfinder.com/data/icons/leto-finance-money-1/64/finance_money_budget_currency_rate-64.png"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Financial friendly</p>
            <p className="text-center text-sm text-gray-500">
            We prioritize client satisfaction, not just providing services, and strive to be financially friendly by offering cost-effective solutions that strengthen our customer relationships.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
            <img
              src="https://cdn3.iconfinder.com/data/icons/leto-finance-money-1/64/finance_growth_money_income-64.png"
              alt=""
              className="inline-block h-16 w-16 rounded-full object-cover"
            />
            <p className="text-xl font-semibold">Clients Success is our Top priority</p>
            <p className="text-center text-sm text-gray-500">
            Our clients' success is our top priority, and we dedicate our technologies and niche services with the utmost dedication to achieving it.
            </p>
          </li>
        </ul>
      </div>
    </section>
    {/* SET-03-START-HERE */}
     <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Backed up by real data
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>
        {/* Content */}
        <div className="mx-auto flex w-full max-w-4xl flex-col flex-wrap justify-between gap-5 px-16 py-8 sm:flex-row md:gap-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Projects</p>
            <h2 className="text-3xl font-bold md:text-6xl">50+</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Grown Companies</p>
            <h2 className="text-3xl font-bold md:text-6xl">100+</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Customers</p>
            <h2 className="text-3xl font-bold md:text-6xl">1200+</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Support Tickets</p>
            <h2 className="text-3xl font-bold md:text-6xl">890</h2>
          </div>
        </div>
      </div>
    </section>
    {/* SET-04-START-HERE */}
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="mb-12 flex flex-col md:flex-row">
          <h2 className="mb-8 text-3xl max-w-lg font-bold md:mb-12 md:text-5xl lg:mb-16">
          Why LugarPrime.com?
          </h2>
          <p className="text-sm text-gray-500 max-w-lg">
          {/* Empowering your business for better tomorrow. */}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* FactsCard */}
          <div className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
            <div className="text-xl font-semibold">
              <h3>10,000+</h3>
              <p>Users</p>
            </div>

            <p className="mt-4 text-sm">
              Empower your decisions with our AI-driven predictive analytics,
              foreseeing market trends that keep you a step ahead.
            </p>
          </div>
          {/* FactsCard */}
          <div className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
            <div className="text-xl font-semibold">
              <h3>460+</h3>
              <p>Components</p>
            </div>

            <p className="mt-4 text-sm">
              Empower your decisions with our AI-driven predictive analytics,
              foreseeing market trends that keep you a step ahead.
            </p>
          </div>
          {/* FactsCard */}
          <div className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
            <div className="text-xl font-semibold">
              <h3>50%</h3>
              <p>Time Savings</p>
            </div>

            <p className="mt-4 text-sm">
              Empower your decisions with our AI-driven predictive analytics,
              foreseeing market trends that keep you a step ahead.
            </p>
          </div>
          {/* FactsCard */}
          <div className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
            <div className="text-xl font-semibold">
              <h3>5-Star</h3>
              <p>User Satisfaction</p>
            </div>

            <p className="mt-4 text-sm">
              Empower your decisions with our AI-driven predictive analytics,
              foreseeing market trends that keep you a step ahead.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* SET-05-START-HERE */}
    <section>
			{/* Container */}
			<div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
				{/* Component */}
				<div className="flex flex-col items-center">
					{/* Item */}
					<div className="relative">
						<div className="absolute w-1 md:w-2 bg-black h-full left-1/2 transform -translate-x-1/2"></div>
						{/* Static Event Entry */}
						<div className="mb-20 mt-20 flex items-center w-full">
							<div className="w-1/2 text-right pr-5 md:pr-12">
								<h5 className="text-lg md:text-2xl font-semibold">
									August 2014
								</h5>
							</div>
							<div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
							<div className="w-1/2 pl-5 md:pl-12">
								<h6 className="text-md md:text-xl font-semibold mb-3">
									Started the company
								</h6>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
									aliquam, purus sit amet luctus.
								</p>
							</div>
						</div>
						{/* Another Static Event Entry */}
						<div className="mb-20 mt-20 flex items-center w-full">
							<div className="w-1/2 text-right pr-5 md:pr-12">
								<h5 className="text-lg md:text-2xl font-semibold">
									September 2016
								</h5>
							</div>
							<div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
							<div className="w-1/2 pl-5 md:pl-12">
								<h6 className="text-md md:text-xl font-semibold mb-3">
									First Client
								</h6>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
									aliquam, purus sit amet luctus.
								</p>
							</div>
						</div>
					</div>
					{/* Item */}
					<div className="relative">
						<div className="absolute w-1 md:w-2 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
						{/* More Static Entries */}
						<div className="mb-20 mt-20 flex items-center w-full">
							<div className="w-1/2 text-right pr-5 md:pr-12">
								<h5 className="text-lg md:text-2xl font-semibold text-gray-600">
									January 2017
								</h5>
							</div>
							<div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-300"></div>
							<div className="w-1/2 pl-5 md:pl-12">
								<h6 className="text-md md:text-xl font-semibold text-gray-600 mb-3">
									Hired our first Dev
								</h6>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
									aliquam, purus sit amet luctus.
								</p>
							</div>
						</div>
						{/* And another one */}
						<div className="mb-20 mt-20 flex items-center w-full">
							<div className="w-1/2 text-right pr-5 md:pr-12">
								<h5 className="text-lg md:text-2xl font-semibold text-gray-600">
									May 2017
								</h5>
							</div>
							<div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-300"></div>
							<div className="w-1/2 pl-5 md:pl-12">
								<h6 className="text-md md:text-xl font-semibold text-gray-600 mb-3">
									Raised $5M
								</h6>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
									aliquam, purus sit amet luctus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default Aboutus
