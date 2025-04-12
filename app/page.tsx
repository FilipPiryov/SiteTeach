import Image from "main/placeholder.jpg"
import { Star, MapPin, Clock, Mail, Phone, Instagram, Linkedin } from "lucide-react"
import ContactForm from "@/components/contact-form"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg">Daniel Petrov</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-emerald-600 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-emerald-600 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="hover:text-emerald-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-block bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Book a Free Trial
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-cream py-12 md:py-24">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Private English Lessons</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6">Daniel Petrov 🇧🇬</h2>
              <p className="text-base md:text-lg mb-6">Young, Professional, Passionate about Language</p>
              <ul className="space-y-2 mb-8 inline-block text-left">
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-2">✅</span> CELTA Certified
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-2">✅</span> Fluent in English & Bulgarian
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-2">✅</span> Lessons online or in-person (Sofia)
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors text-lg"
              >
                Book a Free Trial
              </a>
            </div>
            <div className="order-1 md:order-2 flex justify-center mb-6 md:mb-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/placeholder.jpg?height=320&width=320"
                  alt="Daniel Petrov - English Tutor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-4">
                Hello! I'm Daniel, a passionate English language tutor with over 5 years of experience teaching students
                of all ages and proficiency levels. As a native Bulgarian who has mastered English to a native-like
                level, I understand the challenges that language learners face.
              </p>
              <p className="text-lg mb-4">
                My teaching approach is communicative and student-centered. I believe that learning happens best when
                it's engaging, relevant, and tailored to your specific needs and goals. Whether you're preparing for an
                important exam, need to improve your business English, or simply want to become more confident in
                everyday conversations, I'm here to help you succeed.
              </p>
              <p className="text-lg">
                I offer flexible scheduling with both online and in-person lessons in Sofia. Each lesson is carefully
                planned to maximize your learning while keeping the atmosphere relaxed and supportive.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Lesson Types & Prices</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Conversational English</h3>
                <p className="text-gray-600 mb-4 text-center">Develop fluency and confidence in everyday situations</p>
                <p className="text-center font-bold text-lg text-emerald-600">30€ / hour</p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Exam Preparation</h3>
                <p className="text-gray-600 mb-4 text-center">IELTS, TOEFL, Cambridge exams (FCE, CAE, CPE)</p>
                <p className="text-center font-bold text-lg text-emerald-600">35€ / hour</p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Business English</h3>
                <p className="text-gray-600 mb-4 text-center">Presentations, negotiations, emails, and meetings</p>
                <p className="text-center font-bold text-lg text-emerald-600">40€ / hour</p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Grammar & Vocabulary</h3>
                <p className="text-gray-600 mb-4 text-center">Targeted lessons to improve specific language areas</p>
                <p className="text-center font-bold text-lg text-emerald-600">30€ / hour</p>
              </div>
            </div>
            <div className="text-center mt-8 md:mt-10">
              <a
                href="#contact"
                className="inline-block bg-emerald-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-md hover:bg-emerald-700 transition-colors text-base md:text-lg"
              >
                Schedule Your First Lesson
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">What My Students Say</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex text-yellow-400 mb-3">
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                </div>
                <p className="italic mb-4">
                  "Daniel helped me prepare for my IELTS exam, and I achieved a band score of 7.5! His teaching methods
                  are effective, and he always made our lessons engaging and relevant to the exam."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Maria Ivanova</p>
                    <p className="text-sm text-gray-600">University Student</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex text-yellow-400 mb-3">
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                </div>
                <p className="italic mb-4">
                  "As a business professional, I needed to improve my English for international meetings. Daniel's
                  business English lessons were perfectly tailored to my needs. My confidence has improved
                  tremendously!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Stefan Petrov</p>
                    <p className="text-sm text-gray-600">Marketing Manager</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex text-yellow-400 mb-3">
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                </div>
                <p className="italic mb-4">
                  "I've tried several English tutors before, but Daniel stands out with his patience and ability to
                  explain complex grammar in a simple way. The lessons are always fun and I look forward to them every
                  week!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Elena Dimitrova</p>
                    <p className="text-sm text-gray-600">High School Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Mail className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="break-all">daniel.petrov@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-emerald-600 mr-3 flex-shrink-0" />
                    <span>+359 88 888 8888</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Sofia, Bulgaria (In-person lessons available)</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Available: Mon-Fri 10:00-20:00, Sat 10:00-14:00</span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
                <div className="mt-8 h-48 md:h-64 bg-gray-200 rounded-lg">
                  {/* Google Maps would go here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">Google Maps Embed</div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Daniel Petrov. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
