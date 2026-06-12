import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Calendar,
  Clock,
  Users,
  Trophy,
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Send,
  Menu,
  X,
  ChevronRight,
  Megaphone,
  Brain,
  Target,
  TrendingUp,
  BookOpen,
  PlayCircle,
  Settings,
  ShieldCheck
} from 'lucide-react';
import './styles.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const whatsappNumber = '919871643210';

const wa = (text = 'Hi Deepthi team, I want to register for the training.') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

const trainings = [
  {
    id: 't1',
    title: 'Psychology of Sales',
    tag: 'LIVE DAILY',
    date: '16 Jun 2026',
    time: '7:00 PM - 9:00 PM',
    mode: 'Online via Zoom',
    price: 'FREE',
    image: '/assets/event-psychology.jpeg',
    desc: 'Read customer mindset before selling and convert more leads.'
  },
  {
    id: 't2',
    title: 'Read Customer Mindset',
    tag: 'POPULAR',
    date: '16 Jun 2026',
    time: '7:00 PM - 9:00 PM',
    mode: 'Online Workshop',
    price: 'FREE for first 100',
    image: '/assets/event-customer-mindset.jpeg',
    desc: 'Understand buying signals, objections and customer relationships.'
  },
  {
    id: 't3',
    title: 'Want to Earn More Income?',
    tag: 'FREE WEBINAR',
    date: '16 Jun 2026',
    time: '7:00 PM - 9:00 PM',
    mode: 'Online Webinar',
    price: 'FREE',
    image: '/assets/event-income.jpeg',
    desc: 'Business owners learn sales psychology and growth strategies.'
  },
  {
    id: 't4',
    title: 'Sales Systems & Funnels Workshop',
    tag: 'UPCOMING',
    date: 'Every Week',
    time: '7:00 PM - 9:00 PM',
    mode: 'Online via Zoom',
    price: 'Register Now',
    image: '/assets/final-reference.png',
    desc: 'Fix sales process, follow-up and revenue funnel gaps.'
  }
];

const expertise = [
  'Sales Communication',
  'Objection Handling',
  'Negotiation Skills',
  'Closing Techniques',
  'Customer Psychology',
  'Sales Funnels',
  'Sales Systems',
  'Growth Strategies',
  'Revenue Acceleration',
  'Team Performance'
];

const trainFor = [
  'Business Owners',
  'SME Teams',
  'Corporate Employees',
  'Sales Professionals',
  'Managers & Team Leaders',
  'Entrepreneurs',
  'Telecallers & Inside Sales Teams',
  'Real Estate Associates',
  'Network Marketers'
];

const testimonials = [
  [
    'Rohit Sharma',
    'CEO, TechNova Solutions',
    'Deepthi’s training completely changed the way we approach sales. Our conversions improved strongly within weeks.'
  ],
  [
    'Sneha Reddy',
    'Founder, GlowUp Skincare',
    'Her digital marketing and sales strategies are practical, simple and result-oriented.'
  ],
  [
    'Arjun Mehta',
    'Director, Mehta Industries',
    'A powerful mentor who truly cares about growth and practical implementation.'
  ]
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Trainings', 'Services', 'Success Stories', 'Resources', 'Blog', 'Contact'];

  return (
    <>
      <header className="header">
        <a className="brand" href="#home">
          <span>Deepthi</span>
          <small>SALES SHAKTHI</small>
        </a>

        <nav>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replaceAll(' ', '-')}`}>
              {l}
            </a>
          ))}
        </nav>

        <a className="btn primary" href="#contact">
          Book Consultation
        </a>

        <button className="hamb" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </header>

      {open && (
        <div className="mobile">
          <button onClick={() => setOpen(false)}>
            <X />
          </button>

          {links.map((l) => (
            <a onClick={() => setOpen(false)} key={l} href={`#${l.toLowerCase().replaceAll(' ', '-')}`}>
              {l}
            </a>
          ))}

          <a className="btn primary" href="#contact">
            Book Consultation
          </a>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroText">
        <p className="eyebrow">MARKETING STRATEGIST | SALES TRAINER | BUSINESS GROWTH MENTOR</p>

        <h1>
          Empowering Businesses to <span>Sell Smarter, Grow Faster</span> & Lead Stronger
        </h1>

        <p>
          Practical training, proven strategies and personal mentoring to help entrepreneurs, teams and professionals
          achieve sustainable revenue growth.
        </p>

        <div className="actions">
          <a className="btn primary" href="#contact">
            Book Free Consultation <ChevronRight size={18} />
          </a>
          <a className="btn outline" href="#trainings">
            Explore Trainings
          </a>
          <a className="btn light" href="https://www.instagram.com/saleswithdeepthi/" target="_blank" rel="noreferrer">
            <PlayCircle size={18} /> Watch Intro
          </a>
        </div>

        <div className="trust">
          <span className="avatars">👩🏻‍💼👨🏻‍💼👩🏽‍💼</span> Trusted by 500+ entrepreneurs & business owners
        </div>
      </div>

      <div className="heroPhoto">
        <div className="photoGlow">
          <img src="/assets/event-income.jpeg" alt="Deepthi webinar visual" />
        </div>
      </div>

      <aside className="sidePanel">
        <h3>
          Stay connected with <span>WhatsApp updates</span>
        </h3>

        <div className="phoneMock">
          <div className="chat">
            <b>Deepthi Sales Shakthi</b>
            <p>Hi 👋 Upcoming training update for you!</p>
            <p>
              Psychology of Sales
              <br />
              7:00 PM - 9:00 PM
              <br />
              Online via Zoom
            </p>
            <a href={wa()}>Click to Register</a>
          </div>
        </div>

        <a className="btn primary full" href={wa('Hi Deepthi team, add me to WhatsApp training updates.')}>
          Join WhatsApp List
        </a>
      </aside>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <Stat icon={<Trophy />} n="10+" t="Years Experience" />
      <Stat icon={<Users />} n="500+" t="Businesses Guided" />
      <Stat icon={<BookOpen />} n="1000+" t="Professionals Trained" />
      <Stat icon={<Calendar />} n="50+" t="Workshops Conducted" />
      <Stat icon={<Star />} n="95%" t="Client Satisfaction" />
    </section>
  );
}

function Stat({ icon, n, t }) {
  return (
    <div className="stat">
      <span>{icon}</span>
      <b>{n}</b>
      <small>{t}</small>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="aboutImage">
        <img src="/assets/event-psychology.jpeg" alt="Deepthi event" />
        <div className="badge">
          2026
          <br />
          Youngest Women Icon Award
        </div>
      </div>

      <div>
        <p className="eyebrow">ABOUT DEEPTHI</p>
        <h2>Sales Growth Coach & Strategist</h2>
        <p>
          Deepthi helps business owners generate revenue faster by fixing sales systems, funnels and strategies. She
          trains teams with practical frameworks that improve communication, objection handling, confidence, follow-up
          and closing ability.
        </p>

        <ul className="ticks">
          <li>2+ lakh social media audience</li>
          <li>Helped 1 lakh+ professionals including telecallers, real estate associates and network marketers</li>
          <li>Worked with 100+ small, medium and corporate companies</li>
          <li>Creator of the transformational Sales Shakthi program</li>
        </ul>
      </div>

      <div className="trainCard">
        <h3>I Train & Mentor</h3>
        {trainFor.map((x) => (
          <p key={x}>
            <CheckCircle2 size={17} />
            {x}
          </p>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const icons = [<Megaphone />, <ShieldCheck />, <Settings />, <Target />, <Brain />, <TrendingUp />];

  return (
    <section id="services" className="services">
      <p className="eyebrow center">AREAS OF EXPERTISE</p>
      <h2>Solutions That Drive Revenue Growth</h2>

      <div className="serviceGrid">
        {expertise.map((x, i) => (
          <div className="service" key={x}>
            {icons[i % icons.length]}
            <b>{x}</b>
          </div>
        ))}
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section className="signature">
      <div>
        <p>Signature Program</p>
        <h2>SALES SHAKTHI</h2>
        <span>A transformational sales growth program for individuals and teams.</span>

        <div className="cols">
          <p>✓ Improve communication</p>
          <p>✓ Handle objections confidently</p>
          <p>✓ Negotiate better</p>
          <p>✓ Build follow-up systems</p>
          <p>✓ Close more deals</p>
          <p>✓ Create predictable revenue</p>
        </div>
      </div>

      <img src="/assets/event-customer-mindset.jpeg" alt="Sales Shakthi" />
    </section>
  );
}

function Trainings() {
  return (
    <section id="trainings" className="trainings">
      <div className="sectionHead">
        <div>
          <p className="eyebrow">UPCOMING ONLINE TRAININGS</p>
          <h2>Daily Running Webinars & Workshops</h2>
        </div>

        <a href={wa('Hi, send me all upcoming training details.')}>View All Trainings →</a>
      </div>

      <div className="trainingGrid">
        {trainings.map((t) => (
          <article className="training" key={t.id}>
            <div className="poster">
              <img src={t.image} alt={t.title} />
              <span>{t.tag}</span>
            </div>

            <div className="pad">
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <p>
                <Calendar size={16} />
                {t.date}
              </p>
              <p>
                <Clock size={16} />
                {t.time}
              </p>
              <p>
                <MessageCircle size={16} />
                {t.mode}
              </p>
              <b>{t.price}</b>

              <a className="btn primary full" href={wa(`Hi Deepthi team, I want to register for ${t.title}.`)}>
                Register Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="impact">
      <div>
        <h3>Why Learn With Deepthi?</h3>

        {[
          '10+ Years of Real-World Experience',
          'Practical Strategies That Deliver Results',
          'Interactive & Engaging Sessions',
          'Personalized Mentoring & Support',
          'Proven Track Record of Transforming Businesses'
        ].map((x) => (
          <p key={x}>
            <CheckCircle2 /> {x}
          </p>
        ))}

        <a className="btn outline" href="#about">
          Know More About Deepthi
        </a>
      </div>

      <div>
        <h3>Past Training Impact</h3>
        <div className="impactGrid">
          <Stat icon={<Megaphone />} n="80+" t="Trainings Conducted" />
          <Stat icon={<Users />} n="5000+" t="Professionals Trained" />
          <Stat icon={<BookOpen />} n="350+" t="Businesses Mentored" />
          <Stat icon={<TrendingUp />} n="10,000+" t="Leads Generated" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="success-stories" className="test">
      <p className="eyebrow">STUDENT & CLIENT TESTIMONIALS</p>
      <h2>What People Say About Deepthi</h2>

      <div className="testGrid">
        {testimonials.map((t) => (
          <div className="quote" key={t[0]}>
            <div className="stars">★★★★★</div>
            <p>“{t[2]}”</p>
            <b>{t[0]}</b>
            <small>{t[1]}</small>
          </div>
        ))}
      </div>

      <h3>Glimpses from Past Workshops</h3>

      <div className="gallery">
        <img src="/assets/event-customer-mindset.jpeg" alt="Workshop 1" />
        <img src="/assets/event-income.jpeg" alt="Workshop 2" />
        <img src="/assets/event-psychology.jpeg" alt="Workshop 3" />
        <img src="/assets/final-reference.png" alt="Workshop 4" />
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await fetch(`${API}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.log('Backend not connected yet. Form demo saved on UI only.');
    }

    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="subscribe">
        <Mail size={52} />

        <div>
          <h2>Never Miss an Update!</h2>
          <p>Subscribe and get notified about new trainings, offers and exclusive content.</p>
        </div>

        <form onSubmit={submit}>
          <input name="email" placeholder="Enter your email" required />
          <button className="btn primary">Subscribe Now</button>
        </form>
      </div>

      <div className="contactGrid">
        <div>
          <h3>Can bulk WhatsApp messages be added?</h3>
          <p>
            Yes. Leads from forms can be collected automatically and connected with WhatsApp API for confirmations,
            reminders, offers and follow-up messages.
          </p>

          <ul className="ticks">
            <li>Collect leads from forms</li>
            <li>Add to WhatsApp list</li>
            <li>Send updates & reminders</li>
            <li>Fully automated system</li>
          </ul>

          <a className="btn dark" href={wa('Hi, I want to automate training updates through WhatsApp.')}>
            Let's Automate Updates <Send size={18} />
          </a>
        </div>

        <form className="leadForm" onSubmit={submit}>
          <h3>Get In Touch</h3>
          <input name="name" placeholder="Your Name" required />
          <input name="email" placeholder="Email Address" />
          <input name="phone" placeholder="Phone Number" required />

          <select name="interest">
            <option>Workshop Registration</option>
            <option>Business Consultation</option>
            <option>Corporate Training</option>
            <option>WhatsApp Updates</option>
          </select>

          <textarea name="message" placeholder="Your Message"></textarea>

          <button className="btn primary">Send Message</button>

          {sent && <p className="ok">Saved successfully. Team will contact shortly.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <a className="brand" href="#home">
          <span>Deepthi</span>
          <small>SALES SHAKTHI</small>
        </a>

        <p>Empowering businesses with smarter strategies, stronger sales and sustainable growth.</p>

        <p className="social">
  <span>📘</span>
  <span>📷</span>
  <span>▶️</span>
  <span>💼</span>
</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>
          Home
          <br />
          About
          <br />
          Trainings
          <br />
          Services
          <br />
          Success Stories
          <br />
          Contact
        </p>
      </div>

      <div>
        <h4>Contact Us</h4>
        <p>
          <Phone /> +91 89716 43210
        </p>
        <p>
          <Mail /> hello@deepthisalesshakthi.com
        </p>
        <p>
          <MapPin /> Hyderabad, India
        </p>
      </div>

      <div>
        <h4>Instagram</h4>
        <a href="https://www.instagram.com/saleswithdeepthi/" target="_blank" rel="noreferrer">
          @saleswithdeepthi
        </a>
        <a className="btn primary" href="#contact">
          Book Free Consultation
        </a>
      </div>
    </footer>
  );
}

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/leads`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData([]));
  }, []);

  return (
    <div className="admin">
      <h1>Deepthi Admin Dashboard</h1>
      <p>Leads will appear here from website forms.</p>

      <a className="btn outline" href="/">
        Back to Website
      </a>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Interest</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((l, i) => (
            <tr key={i}>
              <td>{l.name}</td>
              <td>{l.phone}</td>
              <td>{l.email}</td>
              <td>{l.interest}</td>
              <td>{l.createdAt ? new Date(l.createdAt).toLocaleString() : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  if (location.pathname === '/admin') return <Admin />;

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Signature />
        <Trainings />
        <Impact />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <a className="whatsapp" href={wa()}>
        <MessageCircle /> Chat with Us
      </a>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);