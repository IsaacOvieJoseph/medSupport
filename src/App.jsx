import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { 
  Heart, 
  PlusCircle,
  Plus, 
  Search, 
  ShieldCheck, 
  Hospital, 
  FileText, 
  MessageSquare, 
  Clock, 
  ChevronRight,
  TrendingUp,
  Award,
  Users,
  Bell,
  CheckCircle2,
  AlertCircle,
  X,
  Lock,
  LogOut,
  Settings,
  Stethoscope,
  Activity,
  ClipboardCheck,
  Wallet,
  LayoutDashboard,
  FileSearch,
  CreditCard,
  Mail,
  Zap,
  Send,
  Reply,
  Menu
} from 'lucide-react'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Mock Data ---
const MOCK_HOSPITALS = [
  { id: 1, name: "City Medical Center", location: "New York", verified: true },
  { id: 2, name: "Saint Mary's Hospital", location: "Chicago", verified: true },
  { id: 3, name: "General Health Institute", location: "Los Angeles", verified: true },
  { id: 4, name: "Grace Specialists", location: "Lagos", verified: true }
]

const MOCK_POSTS = [
  {
    id: 1,
    title: "Support Surgery for Little Sarah",
    patientName: "Sarah J.",
    description: "Sarah was diagnosed with a rare heart condition that requires immediate surgery. We are raising funds to cover the costs at City Medical Center.",
    target: 25000,
    current: 12500,
    hospital: "City Medical Center",
    category: "Cardiology",
    status: "Verified",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    daysLeft: 14,
    comments: [
      { id: 101, user: "Dr. James", text: "Verified medical reports. Please support Sarah.", date: "2 days ago" },
      { id: 102, user: "Mama Rose", text: "Wishing Sarah a quick recovery. Sent my little bit.", date: "1 hour ago" }
    ]
  },
  {
    id: 2,
    title: "Leukemia Treatment for Ahmed",
    patientName: "Ahmed K.",
    description: "Ahmed needs chemotherapy and bone marrow transplant. Every donation counts towards his recovery.",
    target: 40000,
    current: 38500,
    hospital: "Grace Specialists",
    category: "Oncology",
    status: "Verified",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop",
    daysLeft: 5,
    comments: []
  }
]

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav className="glass-effect" style={{ 
      position: 'sticky', top: 0, zIndex: 1000, padding: '1rem 0',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }}>
      <div className="container flex justify-between">
        <Link to="/" className="flex" style={{ textDecoration: 'none', color: 'var(--secondary)' }}>
          <Heart className="primary-color" size={32} style={{ color: 'var(--primary)' }} fill="var(--primary)" />
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>HealthAid</h1>
        </Link>
        <div className="flex desktop-only" style={{ gap: '2rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500 }}>Home</Link>
          <Link to="/hospitals" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500 }}>Hospitals</Link>
          <Link to="/how-it-works" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500 }}>How it Works</Link>
          <Link to="/hospital-portal" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500 }}>Partner Portal</Link>
          <Link to="/create" className="btn btn-primary" style={{ textDecoration: 'none', gap: '0.5rem' }}>
            <Plus size={18} /> Start Fundraiser
          </Link>
        </div>
        <button onClick={toggle} className="mobile-only" style={{ background: 'none', border: 'none', color: 'var(--secondary)', cursor: 'pointer' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <>
          <div onClick={toggle} className="mobile-only" style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.2)', backdropFilter: 'blur(4px)', zIndex: 998 }}></div>
          <div className="mobile-only animate-fade-in" style={{ 
            background: 'white', position: 'absolute', top: '100%', right: '1.5rem', 
            width: '240px', padding: '2rem 1.5rem', display: 'flex !important', flexDirection: 'column !important', gap: '1rem', 
            borderRadius: 'var(--radius-lg)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
            zIndex: 999, border: '1px solid #e2e8f0', textAlign: 'left', marginTop: '0.5rem'
          }}>
            <Link to="/" onClick={toggle} style={{ display: 'block', textDecoration: 'none', color: 'var(--text)', fontWeight: 700, fontSize: '1.125rem', padding: '0.25rem 0' }}>Home</Link>
            <Link to="/hospitals" onClick={toggle} style={{ display: 'block', textDecoration: 'none', color: 'var(--text)', fontWeight: 700, fontSize: '1.125rem', padding: '0.25rem 0' }}>Hospitals</Link>
            <Link to="/how-it-works" onClick={toggle} style={{ display: 'block', textDecoration: 'none', color: 'var(--text)', fontWeight: 700, fontSize: '1.125rem', padding: '0.25rem 0' }}>How it Works</Link>
            <Link to="/hospital-portal" onClick={toggle} style={{ display: 'block', textDecoration: 'none', color: 'var(--text)', fontWeight: 700, fontSize: '1.125rem', padding: '0.25rem 0' }}>Partner Portal</Link>
            <div style={{ height: '1px', background: '#f1f5f9', margin: '0.5rem 0' }}></div>
            <Link to="/create" onClick={toggle} className="btn btn-primary" style={{ display: 'flex', textDecoration: 'none', padding: '1rem', justifyContent: 'center' }}>Start Fundraiser</Link>
          </div>
        </>
      )}
    </nav>
  )
}

const Hero = () => (
  <section style={{ padding: '8rem 0 6rem', textAlign: 'center', background: 'radial-gradient(circle at top right, #f0fdf4 0%, var(--background) 50%)' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', lineHeight: 1.2 }}>Empowering Recovery Through Community Care</h1>
      <p className="animate-fade-in" style={{ fontSize: '1.25rem', margin: '1.5rem 0 2.5rem' }}>
        Helping people with health issues generate funds from the community. Direct hospital payments, verified reports, and real-time transparency.
      </p>
      <div className="flex hero-buttons" style={{ justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <Link to="/create" className="btn btn-primary" style={{ padding: '1rem 2.5rem', textDecoration: 'none' }}>Get Help Today</Link>
        <Link to="/how-it-works" className="btn" style={{ background: 'white', color: 'var(--text)', border: '1px solid #e2e8f0', padding: '1rem 2.5rem', textDecoration: 'none' }}>How it Works</Link>
      </div>
    </div>
  </section>
)

const Stats = () => (
  <section className="container" style={{ margin: '-4rem auto 6rem' }}>
    <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', padding: '1rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>$2.4M</h3>
        <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Total Raised</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>1,200+</h3>
        <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>People Helped</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>85</h3>
        <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Hospital Partners</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 800 }}>100%</h3>
        <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Verified Records</p>
      </div>
    </div>
  </section>
)

const PostCard = ({ post }) => {
  const percent = Math.min(Math.round((post.current / post.target) * 100), 100)
  return (
    <Link to={`/post/${post.id}`} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', cursor: 'pointer' }} 
      onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ height: '200px', width: '100%', position: 'relative' }}>
        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'white', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)', boxShadow: 'var(--shadow-sm)' }}>
          <ShieldCheck size={14} /> Verified
        </div>
      </div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="flex" style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
          <Hospital size={14} /> {post.hospital}
        </div>
        <h3 style={{ marginBottom: '1rem' }}>{post.title}</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <div className="flex justify-between" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--text)' }}>${post.current.toLocaleString()} <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>raised of ${post.target.toLocaleString()}</span></span>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{percent}%</span>
          </div>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${percent}%` }}></div>
          </div>
        </div>

        <div className="flex justify-between" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
          <div className="flex" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            <Clock size={14} /> {post.daysLeft} days left
          </div>
          <span className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Donation Info</span>
        </div>
      </div>
    </Link>
  )
}

const Home = () => (
  <>
    <Hero />
    <Stats />
    <section className="container" id="browse" style={{ marginBottom: '6rem' }}>
      <div className="flex justify-between" style={{ marginBottom: '3rem' }}>
        <div>
          <h2>Ongoing Fundraisers</h2>
          <p>Support these verified medical emergencies in need of urgent care.</p>
        </div>
        <div className="flex" style={{ gap: '1rem' }}>
          <div className="glass-effect" style={{ display: 'flex', alignItems: 'center', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
            <Search size={18} style={{ color: 'var(--text-muted)' }} />
            <input type="text" placeholder="Search..." style={{ border: 'none', background: 'transparent', marginLeft: '0.5rem', outline: 'none', width: '200px' }} />
          </div>
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {MOCK_POSTS.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  </>
)

const CreatePost = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedHospital, setSelectedHospital] = useState('')
  const [reportFiles, setReportFiles] = useState([])
  const [mediaFiles, setMediaFiles] = useState([])

  const handleFileChange = (e, target) => {
    const selected = Array.from(e.target.files)
    if (selected.length > 5) {
      alert("You can only upload a maximum of 5 files per field.")
      return
    }
    if (target === 'reports') setReportFiles([...reportFiles, ...selected].slice(0, 5))
    else setMediaFiles([...mediaFiles, ...selected].slice(0, 5))
  }

  const removeFile = (index, target) => {
    if (target === 'reports') {
      setReportFiles(reportFiles.filter((_, i) => i !== index))
    } else {
      setMediaFiles(mediaFiles.filter((_, i) => i !== index))
    }
  }
  
  const handleFinish = (e) => {
    e.preventDefault()
    alert("Post submitted for verification. You will be notified once details are checked.")
    navigate('/')
  }

  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="card" style={{ padding: '3rem' }}>
        <h2 style={{ textAlign: 'center' }}>Start a Fundraiser</h2>
        <div className="flex justify-between" style={{ marginBottom: '3rem', padding: '0 1rem' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: step >= i ? 1 : 0.4, flex: 1 }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: step >= i ? 'var(--primary)' : '#e2e8f0', color: step >= i ? 'white' : 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '0.5rem', fontSize: '0.875rem' }}>{i}</div>
              <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>{i === 1 ? 'Details' : i === 2 ? 'Documents' : 'Confirm'}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleFinish}>
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 style={{ marginBottom: '1.5rem', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>Campaign & Poster Details</h3>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Full Name (Poster)</label>
                  <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Campaign Title</label>
                <input type="text" placeholder="e.g. Surgery for Kidney Patient" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Campaign Description (Details)</label>
                <textarea placeholder="Tell us more about the medical situation..." style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', minHeight: '100px' }}></textarea>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Goal Amount ($)</label>
                <input type="number" placeholder="25000" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Primary Hospital</label>
                <select 
                  onChange={(e) => setSelectedHospital(e.target.value)} 
                  style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}
                  required
                >
                  <option value="">Select Hospital</option>
                  {MOCK_HOSPITALS.map(h => <option key={h.id} value={h.name}>{h.name} {h.verified ? '(Partner)' : ''}</option>)}
                  <option value="other">Other Hospital</option>
                </select>
                <p style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>Partner hospitals offer instant document verification.</p>
              </div>

              {selectedHospital === 'other' && (
                <div className="animate-fade-in" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Hospital Information</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Hospital Name</label>
                    <input type="text" placeholder="Enter hospital name" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Physical Address</label>
                    <textarea placeholder="Full address" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', minHeight: '80px' }} required></textarea>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Hospital Contact Phone/Email</label>
                    <input type="text" placeholder="Billing department contact" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Bank Name</label>
                      <input type="text" placeholder="e.g. Chase Bank" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Account Number</label>
                      <input type="text" placeholder="e.g. 1100223344" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
                    </div>
                  </div>
                </div>
              )}

              <button type="button" onClick={() => setStep(2)} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Continue to Documents</button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ background: '#f8fafc', padding: '2rem', border: '2px dashed #e2e8f0', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                  <FileText size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
                  <h3>Medical Reports (Max 5)</h3>
                  <p>Upload PDF or JPG images of clinical reports.</p>
                  <label className="btn" style={{ background: 'white', marginTop: '1.5rem', border: '1px solid #e2e8f0', padding: '0.5rem 1.5rem', cursor: 'pointer' }}>
                    Choose Files <input type="file" multiple hidden onChange={(e) => handleFileChange(e, 'reports')} />
                  </label>
                  {reportFiles.length > 0 && (
                     <div style={{ marginTop: '1rem', textAlign: 'left', background: 'white', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
                        <ul style={{ fontSize: '0.8rem', listStyle: 'none', padding: 0 }}>
                           {reportFiles.map((f, i) => (
                             <li key={i} className="flex justify-between" style={{ padding: '0.25rem 0', borderBottom: i < reportFiles.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                               <div className="flex"><CheckCircle2 size={12} color="var(--primary)"/> {f.name}</div>
                               <button onClick={() => removeFile(i, 'reports')} style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer' }}><X size={14}/></button>
                             </li>
                           ))}
                        </ul>
                     </div>
                  )}
                </div>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ background: '#f8fafc', padding: '2rem', border: '2px dashed #e2e8f0', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                  <TrendingUp size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
                  <h3>Verification Media (Max 5)</h3>
                  <p>Upload videos or photos explaining the urgency.</p>
                  <label className="btn" style={{ background: 'white', marginTop: '1.5rem', border: '1px solid #e2e8f0', padding: '0.5rem 1.5rem', cursor: 'pointer' }}>
                    Choose Files <input type="file" multiple hidden onChange={(e) => handleFileChange(e, 'media')} />
                  </label>
                  {mediaFiles.length > 0 && (
                     <div style={{ marginTop: '1rem', textAlign: 'left', background: 'white', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
                        <ul style={{ fontSize: '0.8rem', listStyle: 'none', padding: 0 }}>
                           {mediaFiles.map((f, i) => (
                             <li key={i} className="flex justify-between" style={{ padding: '0.25rem 0', borderBottom: i < mediaFiles.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                               <div className="flex"><CheckCircle2 size={12} color="var(--primary)"/> {f.name}</div>
                               <button onClick={() => removeFile(i, 'media')} style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer' }}><X size={14}/></button>
                             </li>
                           ))}
                        </ul>
                     </div>
                  )}
                </div>
              </div>
              <div className="flex" style={{ gap: '1rem' }}>
                <button type="button" onClick={() => setStep(1)} className="btn" style={{ flex: 1, border: '1px solid #e2e8f0' }}>Back</button>
                <button type="button" onClick={() => setStep(3)} className="btn btn-primary" style={{ flex: 2 }}>Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <div className="glass-effect" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', borderLeft: '4px solid var(--primary)' }}>
                <h4 className="flex"><AlertCircle size={18} /> Verification & Disbursement Notice</h4>
                <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                  Our team will contact the hospital directly to verify the reports. 
                  <strong> Weekly updates and goal notifications</strong> will be sent to your email. 
                  Funds will be disbursed based on the account details provided after verification.
                </p>
              </div>
              <p>By submitting, you agree to the medical transparency guidelines and confirm that all provided poster and hospital details are accurate.</p>
              <div className="flex" style={{ gap: '1rem', marginTop: '2rem' }}>
                <button type="button" onClick={() => setStep(2)} className="btn" style={{ flex: 1, border: '1px solid #e2e8f0' }}>Back</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Submit for Verification</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

const PostDetail = () => {
  const { id } = useParams()
  const post = MOCK_POSTS.find(p => p.id === parseInt(id)) || MOCK_POSTS[0]
  const percent = Math.min(Math.round((post.current / post.target) * 100), 100)
  
  if (!post) return <div className="container">Post not found</div>

  return (
    <div className="container" style={{ flex: 1, paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start', gap: '3rem' }}>
        <div>
          <img src={post.image} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }} />
          <div className="flex" style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '1rem' }}>
            <Award size={20} /> Verified Fundraiser at {post.hospital}
          </div>
          <h2>{post.title}</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text)', marginBottom: '2rem' }}>{post.description}</p>
          
          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '2rem 0' }} />
          
          <h3>Comments & Requests</h3>
          <div style={{ marginTop: '1.5rem' }}>
            {post.comments.map(c => (
              <div key={c.id} className="card" style={{ marginBottom: '1rem', background: '#f8fafc', boxShadow: 'none' }}>
                <div className="flex justify-between">
                  <span style={{ fontWeight: 700 }}>{c.user}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.date}</span>
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.925rem' }}>{c.text}</p>
              </div>
            ))}
            <div className="flex" style={{ marginTop: '2rem', gap: '1rem' }}>
              <input type="text" placeholder="Ask a question or leave a message..." style={{ flex: 1, padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} />
              <button className="btn btn-primary"><MessageSquare size={18} /></button>
            </div>
          </div>
        </div>

        <div className="card glass-effect" style={{ position: 'sticky', top: '100px', padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)' }}>${post.current.toLocaleString()}</div>
            <p>raised of <strong>${post.target.toLocaleString()}</strong> goal</p>
          </div>
          
          <div className="progress-container" style={{ height: '12px' }}>
            <div className="progress-bar" style={{ width: `${percent}%` }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
            <div style={{ textAlign: 'center', background: '#f1f5f9', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 800 }}>142</div>
              <p style={{ fontSize: '0.75rem' }}>Donors</p>
            </div>
            <div style={{ textAlign: 'center', background: '#f1f5f9', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 800 }}>{post.daysLeft}</div>
              <p style={{ fontSize: '0.75rem' }}>Days left</p>
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.125rem' }}>Donate Now</button>
          
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: 'var(--radius-md)', fontSize: '0.825rem', color: '#1e3a8a' }}>
            <div className="flex"><ShieldCheck size={14} /> <strong>Direct Hospital Payment</strong></div>
            <p style={{ marginTop: '0.25rem' }}>Funds generated for this post are held in a dedicated account and paid directly to the hospital billing department upon fulfillment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const HospitalDirectory = () => (
  <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
    <h2 style={{ marginBottom: '1rem' }}>Our Trusted Hospital Partners</h2>
    <p style={{ marginBottom: '3rem' }}>We verify medical reports instantly when users choose from these accredited institutions.</p>
    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
      {MOCK_HOSPITALS.map(h => (
        <div key={h.id} className="card flex" style={{ justifyContent: 'start', padding: '1.5rem' }}>
          <div style={{ background: '#ecfdf5', color: 'var(--primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <Hospital size={24} />
          </div>
          <div>
            <h3>{h.name}</h3>
            <p style={{ fontSize: '0.875rem' }}><Search size={12} /> {h.location}</p>
            <div className="flex mt-1" style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700 }}>
              <ShieldCheck size={14} /> Partnered Institution
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const HowItWorks = () => (
  <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 5rem' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>How HealthAid Works</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>We bridge the gap between people in medical distress and donors who want to help, ensuring 100% transparency through direct hospital payouts.</p>
    </div>

    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
      {[
        { 
          step: 1, 
          icon: <PlusCircle size={32} color="var(--primary)"/>, 
          title: "Start a Fundraiser", 
          desc: "Submit medical reports and financial estimates from any of our partner hospitals. It only takes 5 minutes to set up your campaign." 
        },
        { 
          step: 2, 
          icon: <ShieldCheck size={32} color="var(--primary)"/>, 
          title: "Clinical Verification", 
          desc: "Our medical board and the partner hospital verify the clinical authenticity of the case. This ensures every dollar goes to a real medical need." 
        },
        { 
          step: 3, 
          icon: <TrendingUp size={32} color="var(--primary)"/>, 
          title: "Community Fundraising", 
          desc: "Share your campaign with the community. Donors contribute knowing their funds are secure and verified by the institution." 
        },
        { 
          step: 4, 
          icon: <CheckCircle2 size={32} color="var(--primary)"/>, 
          title: "Direct Disbursement", 
          desc: "Once the goal is met or the treatment date arrives, HealthAid pays the hospital directly. We never send cash to personal accounts for medical bills." 
        }
      ].map(item => (
        <div key={item.step} className="card" style={{ padding: '2.5rem', background: 'white', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-1.5rem', left: '2rem', background: 'var(--primary)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, border: '4px solid #f8fafc' }}>{item.step}</div>
          <div style={{ marginBottom: '1.5rem', background: '#eff6ff', width: '64px', height: '64px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
          <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Detailed Verification Section */}
    <div id="verification" style={{ marginTop: '8rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 5rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Verification Process</h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Integrity is the core of HealthAid. We use a multi-layer verification system to ensure total transparency.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
         {[
           { step: 1, title: "Document Authenticity", desc: "Every medical report and surgery estimate is checked for hospital stamps, signatures, and matching clinical codes." },
           { step: 2, title: "Direct Facility Contact", desc: "Our team contacts the billing department of the nominated hospital to confirm the patient is registered and the cost is accurate." },
           { step: 3, title: "Third-Party Audits", desc: "Disbursements are audited weekly to ensure 100% of funds reached the intended healthcare facility." }
         ].map((v, i) => (
           <div key={i} className="card" style={{ padding: '2.5rem', background: 'white', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-1.5rem', left: '2rem', background: 'var(--success)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, border: '4px solid #f8fafc' }}>{v.step}</div>
              <div style={{ marginBottom: '1.5rem', background: '#ecfdf5', width: '64px', height: '64px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={32} color="var(--success)"/>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>{v.desc}</p>
           </div>
         ))}
      </div>
    </div>

    <div className="card" style={{ marginTop: '8rem', padding: '4rem', background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
      <h2 style={{ color: 'white' }}>Ready to get started?</h2>
      <p style={{ margin: '1.5rem 0 2.5rem', opacity: 0.9 }}>Join thousands of families who have successfully funded their medical procedures through community support.</p>
      <div className="flex" style={{ justifyContent: 'center', gap: '1rem' }}>
        <Link to="/create" className="btn btn-primary" style={{ padding: '1rem 3rem', textDecoration: 'none' }}>Start a Fundraiser</Link>
        <Link to="/hospitals" style={{ color: 'white', fontWeight: 600, textDecoration: 'none' }}>View Partner Hospitals <ChevronRight size={18}/></Link>
      </div>
    </div>
  </div>
)

const Dashboard = () => {
  const [notifications] = useState([
    { id: 1, type: 'approval', text: 'Good news! Your fundraiser for surgery has been verified.', date: 'Today' },
    { id: 2, type: 'milestone', text: 'You’ve reached 50% of your fundraising goal! Keep it up.', date: 'Yesterday' },
    { id: 3, type: 'weekly', text: 'Weekly Update: 14 new people contributed $1,200 this week.', date: '3 days ago' }
  ])

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <div className="grid" style={{ gridTemplateColumns: '1.2fr 2fr', gap: '2rem' }}>
        <div>
          <h2>User Dashboard</h2>
          <div className="card" style={{ marginTop: '2rem' }}>
            <div className="flex" style={{ marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>AJ</div>
                <div>
                  <h3 style={{ margin: 0 }}>Ahmed J.</h3>
                  <p style={{ fontSize: '0.8rem' }}>Member since March 2026</p>
                </div>
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <button className="btn" style={{ justifyContent: 'space-between', background: '#f8fafc', width: '100%', fontSize: '0.9rem' }}>My Campaigns <ChevronRight size={16}/></button>
              <button className="btn" style={{ justifyContent: 'space-between', background: 'white', width: '100%', fontSize: '0.9rem' }}>Donations Made <ChevronRight size={16}/></button>
              <button className="btn" style={{ justifyContent: 'space-between', background: 'white', width: '100%', fontSize: '0.9rem' }}>Settings <ChevronRight size={16}/></button>
            </div>
          </div>
        </div>

        <div>
           <div className="flex justify-between" style={{ marginBottom: '2rem' }}>
             <h3 className="flex"><Bell size={20} /> Notifications</h3>
             <span style={{ fontSize: '0.75rem', background: 'var(--primary)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '100px' }}>3 New</span>
           </div>
           
           <div style={{ display: 'grid', gap: '1rem' }}>
              {notifications.map(n => (
                <div key={n.id} className="card" style={{ padding: '1.25rem', borderLeft: n.id === 1 ? '4px solid var(--primary)' : '1px solid #e2e8f0' }}>
                   <div className="flex justify-between">
                     <div className="flex">
                       {n.type === 'approval' ? <CheckCircle2 size={16} color="var(--primary)"/> : <TrendingUp size={16} color="var(--accent)"/>}
                       <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{n.text}</span>
                     </div>
                     <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{n.date}</span>
                   </div>
                </div>
              ))}
           </div>

           <h3 style={{ margin: '3rem 0 1.5rem' }}>Active Campaigns</h3>
           <div className="card flex" style={{ background: '#f0fdf4', border: '1px solid #d1fae5' }}>
             <div style={{ flex: 1 }}>
               <h4 style={{ color: 'var(--secondary)' }}>Kidney Dialysis Support</h4>
               <p style={{ fontSize: '0.875rem' }}>Target: $15,000 | Progress: $8,400</p>
               <div className="progress-container" style={{ background: '#d1fae5' }}>
                 <div className="progress-bar" style={{ width: '56%' }}></div>
               </div>
             </div>
             <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>View Details</button>
           </div>
        </div>
      </div>
    </div>
  )
}

const AdminPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [pendingPosts, setPendingPosts] = useState([
    { 
      id: 10, 
      title: "Heart Surgery for Baby Leo", 
      poster: "Leo's Dad", 
      posterEmail: "dad@example.com", 
      posterPhone: "+1 555-0199",
      hospitalBank: "Chase Bank",
      hospitalAccountNumber: "1100223344",
      hospital: "Grace Specialists", 
      hospitalEmail: "billing@gracespec.com", 
      hospitalAddress: "123 Medical Way, Lagos",
      hospitalContact: "+234 802 123 4567",
      target: 12000, 
      docs: ["medical_report.pdf", "surgical_estimate.jpg"], 
      date: "2026-03-18",
      description: "Baby Leo was born with a congenital heart defect. This surgery is his only hope for a healthy life."
    },
    { 
      id: 11, 
      title: "Emergency Dialysis", 
      poster: "Jane Doe", 
      posterEmail: "jane@example.com", 
      posterPhone: "+1 555-0244",
      hospitalBank: "Bank of America",
      hospitalAccountNumber: "9988776655",
      hospital: "Other: Hope Clinic", 
      hospitalEmail: "contact@hopeclinic.org", 
      hospitalAddress: "45 Hope Street, Nairobi",
      hospitalContact: "+254 711 222 333",
      target: 5000, 
      docs: ["dialysis_plan.jpg"], 
      date: "2026-03-19",
      description: "Urgent dialysis treatment needed for renal failure patient Jane Doe. Costs cover the first 10 sessions."
    }
  ])
  const [selectedPost, setSelectedPost] = useState(null)
  const [approvedPosts, setApprovedPosts] = useState([
    { id: 1, title: "Support Surgery for Little Sarah", target: 25000, current: 12500, hospital: "City Medical Center", status: "Verified" },
    { id: 2, title: "Leukemia Treatment for Ahmed", target: 40000, current: 38500, hospital: "Grace Specialists", status: "Verified" }
  ])
  const [payouts, setPayouts] = useState([
    { id: 1, campaign: "Kidney Transplant", amount: 8000, hospital: "Saint Mary's", status: "Pending", account: "StMary-990-221" },
    { id: 2, campaign: "Knee Surgery", amount: 2500, hospital: "City Medical", status: "Disbursed", account: "CityMed-441-001" }
  ])
  const [logs, setLogs] = useState([])
  const [emailDraft, setEmailDraft] = useState({ to: '', subject: '', body: '' })
  const [hospitalReplies, setHospitalReplies] = useState([
    { id: 1, hospital: "Grace Specialists", patient: "Ahmed K.", message: "Confirmed medical report receipt. Patient is ready for surgery once funds are disbursed.", date: "2026-03-18 10:30 AM" },
    { id: 2, hospital: "City Medical Center", patient: "Sarah J.", message: "The cardio scan has been updated in the portal. Please review for approval.", date: "2026-03-18 02:15 PM" }
  ])

  const handleLogin = (e) => {
    e.preventDefault()
    if (loginEmail === "admin@healthaid.com" && loginPass === "admin123") setIsLoggedIn(true)
    else alert("Invalid credentials.")
  }

  const handleAction = (id, action) => {
    if (action === 'approve') {
       const post = pendingPosts.find(p => p.id === id)
       setApprovedPosts([...approvedPosts, post])
       setPendingPosts(pendingPosts.filter(p => p.id !== id))
       setLogs([{ id: Date.now(), message: `Approved: ${post.title}`, time: new Date().toLocaleTimeString() }, ...logs])
    }
  }

  if (!isLoggedIn) {
     return (
      <div className="container flex" style={{ minHeight: '80vh', justifyContent: 'center' }}>
        <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ background: '#ecfdf5', color: 'var(--primary)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <Lock size={32} />
            </div>
            <h2>Admin Login</h2>
            <p>Access the Command Center</p>
          </div>
          <form onSubmit={handleLogin}>
            <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="Email" style={{ width: '100%', padding: '0.875rem', marginBottom: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
            <input type="password" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} placeholder="Password" style={{ width: '100%', padding: '0.875rem', marginBottom: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
          </form>
        </div>
      </div>
     )
  }

  return (
    <div className="flex" style={{ flex: 1, background: '#f8fafc', position: 'relative' }}>
      {/* Mobile Portal Header */}
      <div className="mobile-only portal-header" style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
         <div className="flex" style={{ color: 'var(--primary)', fontWeight: 800 }}>
            <ShieldCheck size={20}/> Admin
         </div>
         <button onClick={() => setIsSidebarOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Menu size={24}/></button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="mobile-only" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1900 }}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ width: '280px', background: 'white', borderRight: '1px solid #e2e8f0', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
         <div className="flex" style={{ marginBottom: '3rem', color: 'var(--primary)', fontWeight: 800 }}>
            <ShieldCheck /> HealthAid Admin
         </div>
         <nav style={{ display: 'grid', gap: '0.5rem' }}>
            {[
              { id: 'dashboard', icon: <LayoutDashboard size={18}/>, label: 'Dashboard' },
              { id: 'pending', icon: <FileSearch size={18}/>, label: 'Pending Approvals' },
              { id: 'approved', icon: <CheckCircle2 size={18}/>, label: 'Verified Campaigns' },
              { id: 'payments', icon: <CreditCard size={18}/>, label: 'Disbursements' },
              { id: 'hospitals', icon: <Hospital size={18}/>, label: 'Hospitals' },
              { id: 'emails', icon: <Mail size={18}/>, label: 'Email Hub' },
              { id: 'notifications', icon: <Bell size={18}/>, label: 'Notifications' }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }}
                className="flex"
                style={{ 
                  width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: 'none',
                  background: activeTab === item.id ? 'var(--primary)' : 'transparent',
                  color: activeTab === item.id ? 'white' : 'var(--text)',
                  fontWeight: activeTab === item.id ? 700 : 500,
                  cursor: 'pointer', gap: '0.75rem', textAlign: 'left'
                }}
              >
                {item.icon} {item.label}
              </button>
            ))}
         </nav>
         <button onClick={() => setIsLoggedIn(false)} className="flex" style={{ marginTop: 'auto', padding: '0.75rem', color: 'var(--error)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
            <LogOut size={18}/> Logout
         </button>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
        <div className="flex justify-between" style={{ marginBottom: '2rem' }}>
           <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h2>
           <div style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.875rem' }}>
              System: <span style={{ color: 'var(--success)', fontWeight: 700 }}>Active</span>
           </div>
        </div>

        {activeTab === 'dashboard' && (
           <div className="animate-fade-in">
             <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="card" style={{ background: 'white' }}>
                   <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Pending Posts</div>
                   <div style={{ fontSize: '2rem', fontWeight: 800 }}>{pendingPosts.length}</div>
                </div>
                <div className="card" style={{ background: 'white' }}>
                   <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Total Campaigns</div>
                   <div style={{ fontSize: '2rem', fontWeight: 800 }}>142</div>
                </div>
                <div className="card" style={{ background: 'white' }}>
                   <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Ongoing Payouts</div>
                   <div style={{ fontSize: '2rem', fontWeight: 800 }}>{payouts.filter(p => p.status === 'Pending').length}</div>
                </div>
                <div className="card" style={{ background: 'white' }}>
                   <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Security Status</div>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>Safe</div>
                </div>
             </div>
             
             <h3>Recent Activity Logs</h3>
             <div className="card" style={{ marginTop: '1.5rem', background: '#0f172a', color: '#38bdf8', fontFamily: 'monospace', padding: '1.5rem' }}>
                {logs.length === 0 ? "> No recent logs..." : logs.map(l => <div key={l.id}>{`[${l.time}] ${l.message}`}</div>)}
             </div>
           </div>
        )}

        {activeTab === 'pending' && (
           <div className="animate-fade-in">
              <div style={{ display: 'grid', gap: '1rem' }}>
                {pendingPosts.map(post => (
                  <div key={post.id} className="card flex justify-between">
                     <div>
                        <h4 style={{ margin: 0 }}>{post.title}</h4>
                        <p style={{ fontSize: '0.875rem' }}>{post.poster} | Goal: ${post.target}</p>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Submitted on: {post.date}</div>
                     </div>
                     <div className="flex" style={{ gap: '0.5rem' }}>
                        <button onClick={() => setSelectedPost(post)} className="btn" style={{ background: '#f1f5f9', fontSize: '0.875rem' }}>Review Details</button>
                        <button onClick={() => { setActiveTab('emails'); setEmailDraft({ to: post.posterEmail, subject: 'Regarding your fundraiser', body: '' }) }} className="btn" style={{ background: '#f1f5f9' }}><Mail size={16}/></button>
                        <button onClick={() => { handleAction(post.id, 'approve'); setSelectedPost(null); }} className="btn btn-primary">Approve</button>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        )}

        {activeTab === 'approved' && (
           <div className="animate-fade-in" style={{ overflowX: 'auto' }}>
               <table style={{ minWidth: '800px', width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <thead style={{ background: '#f8fafc' }}>
                     <tr style={{ textAlign: 'left' }}>
                        <th style={{ padding: '1rem' }}>Campaign</th>
                        <th style={{ padding: '1rem' }}>Hospital</th>
                        <th style={{ padding: '1rem' }}>Raised</th>
                        <th style={{ padding: '1rem' }}>Status</th>
                        <th style={{ padding: '1rem' }}>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {approvedPosts.map(post => (
                        <tr key={post.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                           <td style={{ padding: '1rem' }}>{post.title}</td>
                           <td style={{ padding: '1rem' }}>{post.hospital}</td>
                           <td style={{ padding: '1rem' }}>${post.current?.toLocaleString() || 0} / ${post.target?.toLocaleString()}</td>
                           <td style={{ padding: '1rem' }}><span style={{ color: 'var(--success)', fontWeight: 700 }}>Verified</span></td>
                           <td style={{ padding: '1rem' }}>
                              <button onClick={() => setSelectedPost(post)} className="btn" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', border: '1px solid #e2e8f0' }}>View Details</button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
        )}

        {activeTab === 'payments' && (
           <div className="animate-fade-in">
              <div className="flex justify-between" style={{ marginBottom: '2rem' }}>
                <h3>Pending Hospital Disbursements</h3>
                <button className="btn btn-primary">+ New Payout Job</button>
              </div>
              <div style={{ display: 'grid', gap: '1rem' }}>
                 {payouts.map(p => (
                   <div key={p.id} className="card flex justify-between" style={{ borderLeft: p.status === 'Pending' ? '4px solid orange' : '4px solid var(--success)' }}>
                      <div>
                         <div style={{ fontWeight: 700 }}>{p.hospital}</div>
                         <div style={{ fontSize: '0.875rem' }}>For: {p.campaign}</div>
                         <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Account: {p.account}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                         <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>${p.amount}</div>
                         <div style={{ color: p.status === 'Pending' ? 'orange' : 'var(--success)', fontSize: '0.75rem', fontWeight: 800 }}>{p.status}</div>
                         {p.status === 'Pending' && <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', fontSize: '0.75rem', marginTop: '0.5rem' }}>Confirm Payout</button>}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        )}

        {activeTab === 'hospitals' && (
           <div className="animate-fade-in">
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                 {MOCK_HOSPITALS.map(h => (
                    <div key={h.id} className="card">
                       <div className="flex" style={{ gap: '1rem', marginBottom: '1rem' }}>
                          <div style={{ background: '#ecfdf5', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}><Hospital color="var(--primary)"/></div>
                          <div>
                             <h4 style={{ margin: 0 }}>{h.name}</h4>
                             <p style={{ fontSize: '0.75rem' }}>{h.location}</p>
                          </div>
                       </div>
                       <div className="flex justify-between" style={{ marginTop: '1rem' }}>
                          <span style={{ fontSize: '0.75rem', background: '#f0fdf4', color: 'var(--primary)', padding: '0.1rem 0.5rem', borderRadius: '100px' }}>Active Partner</span>
                          <Settings size={14} style={{ cursor: 'pointer' }}/>
                       </div>
                    </div>
                 ))}
                 <div className="card flex" style={{ border: '2px dashed #e2e8f0', background: 'transparent', justifyContent: 'center', cursor: 'pointer' }}>
                    <Plus size={24} color="#94a3b8"/>
                 </div>
              </div>
           </div>
        )}

        {activeTab === 'notifications' && (
           <div className="animate-fade-in">
              <div className="flex justify-between" style={{ marginBottom: '2rem' }}>
                 <h3>Hospital In-App Notifications</h3>
                 <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: '#eff6ff', color: 'var(--primary)', borderRadius: '100px', fontWeight: 700 }}>Communication Active</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '1.5rem' }}>
                 {hospitalReplies.map(reply => (
                    <div key={reply.id} className="card" style={{ background: 'white', borderLeft: '4px solid var(--primary)', padding: '1.5rem' }}>
                       <div className="flex justify-between" style={{ marginBottom: '1rem' }}>
                          <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>{reply.hospital}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{reply.date}</span>
                       </div>
                       <div style={{ fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 700, padding: '0.25rem 0.75rem', background: '#f0f9ff', borderRadius: '4px', width: 'fit-content' }}>RE: {reply.patient}</div>
                       <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text)', margin: 0 }}>{reply.message}</p>
                       <div className="flex" style={{ gap: '0.5rem', marginTop: '1.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                          <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.4rem 1rem' }}>
                             <Reply size={14} /> Send Reply
                          </button>
                          <button className="btn" style={{ fontSize: '0.75rem', padding: '0.4rem 1rem', border: '1px solid #e2e8f0' }}>Archive</button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        )}

        {activeTab === 'emails' && (
           <div className="animate-fade-in card" style={{ background: 'white', maxWidth: '800px' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Send New Dispatch</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Compose official email correspondence to posters or medical partners.</p>
              <div style={{ marginBottom: '1.5rem' }}>
                 <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Recipient Email</label>
                 <input type="email" value={emailDraft.to} onChange={e => setEmailDraft({...emailDraft, to: e.target.value})} placeholder="address@example.com" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                 <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Subject</label>
                 <input type="text" value={emailDraft.subject} onChange={e => setEmailDraft({...emailDraft, subject: e.target.value})} placeholder="Re: Clinical Verification Status" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} />
              </div>
              <div style={{ marginBottom: '2rem' }}>
                 <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message Body</label>
                 <textarea value={emailDraft.body} onChange={e => setEmailDraft({...emailDraft, body: e.target.value})} placeholder="Draft your message here..." style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', minHeight: '200px' }}></textarea>
              </div>
              <button className="btn btn-primary" style={{ padding: '1rem 2rem' }} onClick={() => {
                 alert(`Email sent to ${emailDraft.to}`);
                 setLogs([{ id: Date.now(), message: `Email Sent: ${emailDraft.subject} to ${emailDraft.to}`, time: new Date().toLocaleTimeString() }, ...logs]);
              }}>Dispatch Official Email</button>
           </div>
        )}

        {/* Post Detail Modal */}
        {selectedPost && (
           <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
              <div className="card animate-fade-in" style={{ maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '3rem' }}>
                 <div className="flex justify-between" style={{ marginBottom: '2rem', alignItems: 'start' }}>
                    <div>
                       <h2 style={{ marginBottom: '0.5rem' }}>{selectedPost.title}</h2>
                       <div style={{ color: 'var(--primary)', fontWeight: 700 }}>Medical Target: ${selectedPost.target}</div>
                    </div>
                    <button onClick={() => setSelectedPost(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={24}/></button>
                 </div>

                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <div>
                       <h4 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Poster Information</h4>
                       <div style={{ display: 'grid', gap: '0.75rem', fontSize: '0.9rem' }}>
                          <div><strong>Name:</strong> {selectedPost.poster}</div>
                          <div><strong>Email:</strong> {selectedPost.posterEmail}</div>
                          <div><strong>Phone:</strong> {selectedPost.posterPhone}</div>
                       </div>
                    </div>
                    <div>
                       <h4 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Hospital Information</h4>
                       <div style={{ display: 'grid', gap: '0.75rem', fontSize: '0.9rem' }}>
                          <div><strong>Hospital:</strong> {selectedPost.hospital}</div>
                          <div><strong>Contact Person/Email:</strong> {selectedPost.hospitalEmail}</div>
                          <div><strong>Phone:</strong> {selectedPost.hospitalContact}</div>
                          <div><strong>Address:</strong><br/>{selectedPost.hospitalAddress}</div>
                          <div style={{ background: '#f0f9ff', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e0f2fe', marginTop: '0.5rem' }}>
                             <strong>Disbursement Account:</strong><br/>
                             {selectedPost.hospitalBank ? (
                                <span>{selectedPost.hospitalBank} - {selectedPost.hospitalAccountNumber}</span>
                             ) : (
                                "System Partner (Auto-Disburse)"
                             )}
                          </div>
                       </div>
                    </div>
                 </div>

                 <div style={{ marginTop: '2rem' }}>
                    <h4 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Campaign Description</h4>
                    <p style={{ fontSize: '0.925rem', lineHeight: 1.6 }}>{selectedPost.description}</p>
                 </div>

                 <div style={{ marginTop: '2rem' }}>
                    <h4 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Verification Documents ({selectedPost.docs.length})</h4>
                    <div className="flex" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                       {selectedPost.docs.map((doc, i) => (
                          <div key={i} className="flex" style={{ background: '#f1f5f9', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                             <FileText size={16} /> {doc}
                          </div>
                       ))}
                    </div>
                 </div>                  <div className="flex hero-buttons" style={{ gap: '1rem', marginTop: '3rem', borderTop: '1px solid #f1f5f9', paddingTop: '2rem' }}>
                     <button onClick={() => { handleAction(selectedPost.id, 'approve'); setSelectedPost(null); }} className="btn btn-primary" style={{ flex: 1 }}>Approve Fundraiser</button>
                     <button className="btn" style={{ background: '#fef2f2', color: 'var(--error)', border: '1px solid #fee2e2', flex: 1 }}>Reject Submission</button>
                     <button onClick={() => { setActiveTab('emails'); setEmailDraft({ to: selectedPost.posterEmail, subject: `Action Required: ${selectedPost.title}`, body: '' }); setSelectedPost(null); }} className="btn" style={{ border: '1px solid #e2e8f0', flex: 1 }}>Request Changes</button>
                  </div>
              </div>
           </div>
        )}
      </div>
    </div>
  )
}

const HospitalPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [messages, setMessages] = useState([
     { id: 1, from: "HealthAid Admin", subject: "Patient Verification: Baby Leo", content: "Dear Partner, we have received a fundraiser request for Patient: Baby Leo. Please verify the surgical estimate uploaded and provide clinical sign-off.", date: "2026-03-18 09:00 AM", replies: [] }
  ])
  const [replyText, setReplyText] = useState('')

  const [hospitalData] = useState({
     name: "Grace Specialists",
     code: "HOSP-GRC-001",
     verified: true,
     patients: [
        {
          id: 2,
          name: "Ahmed K.",
          condition: "Leukemia",
          target: 40000,
          raised: 38500,
          status: "Active",
          description: "Ahmed is undergoing intensive chemotherapy. The funds are needed for his upcoming bone marrow transplant and long-term medication.",
          docs: ["clinical_summary_oncology.pdf", "pathology_report.jpg"]
        },
        {
          id: 10,
          name: "Baby Leo",
          condition: "Heart Surgery",
          target: 12000,
          raised: 0,
          status: "Pending Verification",
          description: "Congenital heart defect surgery required within the next 4 weeks. This includes pediatric ICU recovery time.",
          docs: ["echo_cardiogram.pdf", "surgery_estimate_signed.pdf"]
        }
     ],
     payouts: [
        { id: 201, amount: 5000, date: "2026-03-10", status: "Transferred" },
        { id: 202, amount: 8400, date: "Pending", status: "In Process" }
     ]
  })

  const handleLogin = (e) => {
    e.preventDefault()
    // Simplified partner-only login (In a real app, this would query the verified hospitals DB)
    if (loginEmail === "admin@gracespec.com" && loginPass === "grace123") {
       setIsLoggedIn(true)
    } else {
       alert("Invalid Credentials. Access restricted to verified Partner Hospitals.")
    }
  }

  if (!isLoggedIn) {
      return (
        <div className="container flex" style={{ minHeight: '70vh', justifyContent: 'center' }}>
          <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: '3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ background: '#eff6ff', color: '#2563eb', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Hospital size={32} />
              </div>
              <h2 style={{ marginBottom: '0.5rem' }}>Partner Access</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Secure management for verified institutions.</p>
            </div>
            <form onSubmit={handleLogin}>
              <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="Authorized Email" style={{ width: '100%', padding: '0.875rem', marginBottom: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
              <input type="password" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} placeholder="Partner Key" style={{ width: '100%', padding: '0.875rem', marginBottom: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} required />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Secure Login</button>
            </form>
            <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
               Access restricted to accredited institutions.
            </div>
          </div>
        </div>
      )
  }

  return (
    <div className="flex" style={{ flex: 1, background: '#f8fafc', position: 'relative' }}>
       {/* Mobile Portal Header */}
       <div className="mobile-only portal-header" style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="flex" style={{ color: 'var(--primary)', fontWeight: 800 }}>
             <Stethoscope size={20}/> Partner
          </div>
          <button onClick={() => setIsSidebarOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Menu size={24}/></button>
       </div>

       {/* Sidebar Overlay */}
       {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="mobile-only" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1900 }}></div>}

       {/* Hospital Sidebar - Updated to match Admin Portal */}
       <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ width: '280px', background: 'white', borderRight: '1px solid #e2e8f0', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div className="flex" style={{ marginBottom: '3rem', color: 'var(--primary)', fontWeight: 800 }}>
             <Stethoscope /> {hospitalData.name}
          </div>
          <nav style={{ display: 'grid', gap: '0.5rem' }}>
             {[
               { id: 'overview', icon: <Activity size={18}/>, label: 'Patient Overview' },
               { id: 'verification', icon: <ClipboardCheck size={18}/>, label: 'Verification Hub' },
               { id: 'messages', icon: <MessageSquare size={18}/>, label: 'Notifications' },
               { id: 'financials', icon: <Wallet size={18}/>, label: 'Financials' },
               { id: 'settings', icon: <Settings size={18}/>, label: 'Facility Profile' }
             ].map(item => (
               <button
                 key={item.id}
                 onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }}
                 className="flex"
                 style={{
                   width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: 'none',
                   background: activeTab === item.id ? 'var(--primary)' : 'transparent',
                   color: activeTab === item.id ? 'white' : 'var(--text)',
                   fontWeight: activeTab === item.id ? 700 : 500,
                   cursor: 'pointer', gap: '0.75rem', textAlign: 'left'
                 }}
               >
                 {item.icon} {item.label}
               </button>
             ))}
          </nav>
          <button onClick={() => setIsLoggedIn(false)} className="flex" style={{ marginTop: 'auto', padding: '0.75rem', color: 'var(--error)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
             <LogOut size={18}/> Leave Portal
          </button>
       </div>

       {/* Main Content */}
       <div className="main-content" style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
          <div className="flex justify-between" style={{ marginBottom: '3rem' }}>
             <div>
                <h2 style={{ margin: 0 }}>Portal: Clinical Management</h2>
                <p style={{ color: 'var(--text-muted)' }}>System ID: {hospitalData.code} | <span style={{ color: 'var(--success)', fontWeight: 700 }}>Verified Partner</span></p>
             </div>
             <div className="flex" style={{ gap: '1rem' }}>
                <div className="card" style={{ padding: '0.5rem 1rem', background: 'white' }}>
                   <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active Patients</div>
                   <div style={{ fontWeight: 800 }}>{hospitalData.patients.length}</div>
                </div>
                <div className="card" style={{ padding: '0.5rem 1rem', background: 'white' }}>
                   <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Received</div>
                   <div style={{ fontWeight: 800 }}>$13,400</div>
                </div>
             </div>
          </div>

          {activeTab === 'overview' && (
             <div className="animate-fade-in">
                <h3>Current Patient Campaigns</h3>
                <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
                   {hospitalData.patients.map(p => (
                      <div key={p.id} className="card flex justify-between" style={{ background: 'white' }}>
                         <div>
                            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{p.name}</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Condition: {p.condition}</div>
                            <div style={{ marginTop: '1rem' }}>
                               <div style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Fundraising Progress: ${p.raised.toLocaleString()} / ${p.target.toLocaleString()}</div>
                               <div className="progress-container" style={{ width: '200px' }}>
                                  <div className="progress-bar" style={{ width: `${(p.raised/p.target)*100}%` }}></div>
                               </div>
                            </div>
                         </div>
                         <div style={{ textAlign: 'right' }}>
                            <div style={{ color: p.status === 'Active' ? 'var(--primary)' : 'orange', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.5rem', background: p.status === 'Active' ? '#eff6ff' : '#fff7ed', borderRadius: '100px' }}>{p.status}</div>
                            <button onClick={() => setSelectedPatient(p)} className="btn" style={{ marginTop: '1rem', fontSize: '0.75rem', border: '1px solid #e2e8f0' }}>View Detail</button>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          )}

          {activeTab === 'verification' && (
             <div className="animate-fade-in card" style={{ background: 'white' }}>
                <h3>Patient Verification Hub</h3>
                <p style={{ marginTop: '0.5rem' }}>Confirm clinical reports to release funds for medical procedures.</p>
                <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
                    <table style={{ minWidth: '700px', width: '100%', borderCollapse: 'collapse' }}>
                       <thead style={{ borderBottom: '2px solid #f1f5f9' }}>
                          <tr style={{ textAlign: 'left' }}>
                             <th style={{ padding: '1rem' }}>Patient Name</th>
                             <th style={{ padding: '1rem' }}>Initial Reports</th>
                             <th style={{ padding: '1rem' }}>Status</th>
                             <th style={{ padding: '1rem' }}>Action</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                             <td style={{ padding: '1rem' }}>Sarah J.</td>
                             <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}><FileText size={16} color="#94a3b8"/> cardio_scan.pdf</td>
                             <td style={{ padding: '1rem' }}><span style={{ color: 'var(--success)', fontWeight: 700 }}>Confirmed</span></td>
                             <td style={{ padding: '1rem' }}>
                                <button onClick={() => setSelectedPatient(hospitalData.patients[0])} className="btn" style={{ background: '#f1f5f9', fontSize: '0.75rem' }}>View</button>
                             </td>
                          </tr>
                          <tr>
                             <td style={{ padding: '1rem' }}>Baby Leo</td>
                             <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}><FileText size={16} color="#94a3b8"/> echo_report.jpg</td>
                             <td style={{ padding: '1rem' }}><span style={{ color: 'orange', fontWeight: 700 }}>Pending Check</span></td>
                             <td style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
                                <button onClick={() => setSelectedPatient(hospitalData.patients[1])} className="btn" style={{ background: '#f1f5f9', fontSize: '0.75rem' }}>View</button>
                                <button className="btn btn-primary" style={{ fontSize: '0.75rem' }}>Confirm</button>
                             </td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
             </div>
          )}

          {activeTab === 'messages' && (
             <div className="animate-fade-in">
                <div className="flex justify-between" style={{ marginBottom: '2rem' }}>
                   <h3>Administrative Notifications</h3>
                   <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: '#eff6ff', color: 'var(--primary)', borderRadius: '100px', fontWeight: 700 }}>In-App Messaging Active</span>
                </div>
                
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                   {messages.map(msg => (
                      <div key={msg.id} className="card" style={{ background: 'white', padding: 0, overflow: 'hidden' }}>
                         <div style={{ padding: '1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                            <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                               <span style={{ fontWeight: 800 }}>{msg.from}</span>
                               <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{msg.date}</span>
                            </div>
                            <div style={{ fontWeight: 600, color: 'var(--secondary)' }}>{msg.subject}</div>
                         </div>
                         <div style={{ padding: '1.5rem' }}>
                            <p style={{ whiteSpace: 'pre-wrap', fontSize: '0.925rem', lineHeight: 1.6 }}>{msg.content}</p>
                            
                            {msg.replies.length > 0 && (
                               <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '2px dashed #f1f5f9' }}>
                                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '1rem' }}>PREVIOUS REPLIES</div>
                                  {msg.replies.map((rep, idx) => (
                                     <div key={idx} style={{ background: '#f1f5f9', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}>
                                        <div className="flex justify-between" style={{ fontSize: '0.7rem', marginBottom: '0.25rem' }}>
                                           <span style={{ fontWeight: 700 }}>You (Grace Specialists)</span>
                                           <span>Just now</span>
                                        </div>
                                        <p style={{ margin: 0, fontSize: '0.875rem' }}>{rep}</p>
                                     </div>
                                  ))}
                               </div>
                            )}

                            <div style={{ marginTop: '2rem' }}>
                               <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>REPLY TO ADMIN</label>
                               <div className="flex" style={{ gap: '0.5rem' }}>
                                  <textarea 
                                     value={replyText} 
                                     onChange={e => setReplyText(e.target.value)}
                                     placeholder="Type your response here..." 
                                     style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', minHeight: '60px' }}
                                  ></textarea>
                                  <button 
                                     onClick={() => {
                                        if (!replyText.trim()) return;
                                        const newMessages = messages.map(m => m.id === msg.id ? { ...m, replies: [...m.replies, replyText] } : m);
                                        setMessages(newMessages);
                                        setReplyText('');
                                        alert("Reply sent to HealthAid Administration Hub.");
                                     }}
                                     className="btn btn-primary" 
                                     style={{ height: 'fit-content', alignSelf: 'end' }}
                                  >
                                     <Send size={18} />
                                  </button>
                               </div>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          )}

          {activeTab === 'financials' && (
             <div className="animate-fade-in">
                <div className="card" style={{ background: 'white', marginBottom: '2rem' }}>
                   <h3>Disbursement History</h3>
                   <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
                      {hospitalData.payouts.map(pay => (
                         <div key={pay.id} className="flex justify-between" style={{ padding: '1.25rem', border: '1px solid #f1f5f9', borderRadius: 'var(--radius-sm)' }}>
                            <div className="flex" style={{ gap: '1.5rem' }}>
                               <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}><Wallet size={20} color="var(--primary)"/></div>
                               <div>
                                  <div style={{ fontWeight: 700 }}>HealthAid Disbursement #{pay.id}</div>
                                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Confirmed: {pay.date}</div>
                               </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                               <div style={{ fontWeight: 800, fontSize: '1.1rem', color: pay.status === 'Transferred' ? 'var(--success)' : 'orange' }}>+ ${pay.amount.toLocaleString()}</div>
                               <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{pay.status}</div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          )}
       </div>

       {/* Patient Detail Modal for Hospital */}
       {selectedPatient && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
             <div className="card animate-fade-in" style={{ maxWidth: '800px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '3rem', background: 'white' }}>
                <div className="flex justify-between" style={{ marginBottom: '2rem', alignItems: 'start' }}>
                   <div>
                      <h2 style={{ marginBottom: '0.5rem' }}>{selectedPatient.name}</h2>
                      <div className="flex" style={{ color: 'var(--primary)', fontWeight: 700, gap: '0.5rem' }}><Activity size={18}/> {selectedPatient.condition}</div>
                   </div>
                   <button onClick={() => setSelectedPatient(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={24}/></button>
                </div>

                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                   <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                      <h4 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Financial Target</h4>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>${selectedPatient.target.toLocaleString()}</div>
                      <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Raised: ${selectedPatient.raised.toLocaleString()}</p>
                   </div>
                   <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                      <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Verification Status</h4>
                      <div style={{ fontWeight: 700 }}>{selectedPatient.status}</div>
                      <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Clinical sign-off required for disbursement.</p>
                   </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                   <h4 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Medical Description</h4>
                   <p style={{ fontSize: '0.925rem', lineHeight: 1.6, color: 'var(--text)' }}>{selectedPatient.description}</p>
                </div>

                <div>
                   <h4 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Patient Documents</h4>
                   <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                      {selectedPatient.docs?.map((doc, i) => (
                         <div key={i} className="flex" style={{ background: '#f1f5f9', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.825rem', gap: '0.5rem' }}>
                            <FileText size={16} style={{ color: 'var(--text-muted)' }} /> {doc}
                         </div>
                      ))}
                   </div>
                </div>

                {selectedPatient.status === "Pending Verification" && (
                   <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #f1f5f9' }}>
                      <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Approve Clinical Authenticity</button>
                   </div>
                )}
             </div>
          </div>
       )}
    </div>
  )
}

const Footer = () => (
  <footer style={{ background: 'var(--secondary)', color: 'white', padding: '4rem 0', marginTop: 'auto' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', textAlign: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>HealthAid</h3>
          <p style={{ color: '#94a3b8', maxWidth: '300px', fontSize: '0.9rem' }}>Bridging the gap between medical needs and community support. Verified and transparent crowdfunding.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h4 style={{ marginBottom: '1rem' }}>Platform</h4>
          <ul style={{ listStyle: 'none', color: '#94a3b8', fontSize: '0.9rem', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Support someone</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/how-it-works" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>How it Works</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/hospitals" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Partner Hospitals</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><span onClick={() => alert("Success stories module is coming soon!")} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Success Stories</span></li>
          </ul>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h4 style={{ marginBottom: '1rem' }}>Support</h4>
          <ul style={{ listStyle: 'none', color: '#94a3b8', fontSize: '0.9rem', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>Help Center</li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/how-it-works#verification" style={{ color: 'inherit', textDecoration: 'none' }}>Verification Process</Link></li>
            <li>Trust & Safety</li>
            <li>Contact Us</li>
            <li><Link to="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>Admin Portal</Link></li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #1e293b', textAlign: 'center', color: '#64748b', fontSize: '0.8rem' }}>
        © 2026 HealthAid Global. All rights reserved. Built for community resilience.
      </div>
    </div>
  </footer>
)

const AppContent = () => {
  const { pathname } = useLocation()
  const isPortal = pathname === '/admin' || pathname === '/hospital-portal'

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
       {!isPortal && <Navbar />}
       <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/hospitals" element={<HospitalDirectory />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="/hospital-portal" element={<HospitalPortal />} />
          </Routes>
       </main>
       {!isPortal && <Footer />}
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App
