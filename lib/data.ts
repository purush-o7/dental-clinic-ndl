import type {
  Service,
  ServiceCategory,
  Testimonial,
  DoctorProfile,
  Stat,
  NavLink,
  FamilyCardBenefit,
  Feature,
} from "./types";

export const CLINIC = {
  name: "K.M. Reddy Dental Care",
  tagline: "Your Smile, Our Passion",
  address:
    "D.No. 25-395-4-E2, Saleem Nagar, Near Municipal Office, Nandyal",
  phones: ["+91 995 915 3005", "+91 085 143 14856"],
  emails: ["kmreddydentalcarenandyal@gmail.com", "director@kmreddydentalcare.com"],
  hours: {
    weekdays: "9:30 AM – 8:30 PM",
    sunday: "10:00 AM – 2:00 PM",
  },
  social: {
    facebook: "https://www.facebook.com/drkmreddy7",
    instagram: "https://www.instagram.com/km_reddy_dental_care_nandyal",
    whatsapp: "https://wa.me/919959153005",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.997275087131!2d78.47245437575239!3d15.484578754822877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5b325a9a93261%3A0x354927219242d641!2sK.%20M.%20Reddy%20Dental%20care%20and%20Implant%20center!5e0!3m2!1sen!2sin!4v1773113156172!5m2!1sen!2sin",
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "Cosmetic",
  "Restorative",
  "Preventive",
  "Specialized",
];

export const SERVICES: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Restorative",
    shortDescription:
      "Permanent tooth replacement that looks and feels natural.",
    description:
      "Our dental implant solutions provide permanent, natural-looking tooth replacements using state-of-the-art titanium implants. Dr. K.M. Reddy has placed over 1000 implants with a 98% success rate, restoring smiles and confidence for patients of all ages.",
    iconName: "tooth",
    features: [
      "Single tooth implants",
      "Multiple tooth implants",
      "Full mouth rehabilitation",
      "Immediate loading implants",
      "All-on-4 / All-on-6 solutions",
      "Implant-supported dentures",
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    category: "Cosmetic",
    shortDescription:
      "Transform your smile with veneers, bonding, and whitening.",
    description:
      "Achieve the smile you have always dreamed of with our comprehensive cosmetic dentistry services. From porcelain veneers to professional teeth whitening, we combine artistry with advanced dental techniques to create beautiful, natural-looking results.",
    iconName: "sparkle",
    features: [
      "Porcelain veneers",
      "Composite bonding",
      "Professional teeth whitening",
      "Smile makeovers",
      "Gum contouring",
      "Tooth-colored fillings",
    ],
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    category: "Specialized",
    shortDescription: "Straighten teeth with braces or clear aligners.",
    description:
      "Our orthodontic treatments correct misaligned teeth and jaw issues using traditional braces, clear aligners, and modern techniques. We create personalized treatment plans for children, teens, and adults to achieve perfectly aligned smiles.",
    iconName: "grid",
    features: [
      "Metal braces",
      "Ceramic braces",
      "Self-ligating braces",
      "Clear aligners",
      "Retainers",
      "Early intervention orthodontics",
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Restorative",
    shortDescription: "Pain-free root canal therapy to save your natural teeth.",
    description:
      "Our advanced root canal procedures are virtually pain-free thanks to modern anesthesia and rotary endodontic instruments. We save teeth that might otherwise need extraction, preserving your natural smile and preventing more costly replacements.",
    iconName: "heartbeat",
    features: [
      "Single-visit root canals",
      "Rotary endodontics",
      "Microscopic root canal therapy",
      "Re-treatment of failed root canals",
      "Post and core buildup",
      "Apicectomy",
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic",
    shortDescription:
      "Professional whitening for a brighter, more confident smile.",
    description:
      "Our professional teeth whitening treatments can brighten your smile by several shades in just one visit. We use safe, clinically proven whitening systems that deliver dramatic results without damaging your tooth enamel.",
    iconName: "sun",
    features: [
      "In-office power whitening",
      "Take-home whitening kits",
      "Laser teeth whitening",
      "Internal bleaching for root canal treated teeth",
      "Sensitivity-free whitening options",
    ],
  },
  {
    slug: "dental-crowns-bridges",
    title: "Crowns & Bridges",
    category: "Restorative",
    shortDescription:
      "Restore damaged or missing teeth with custom restorations.",
    description:
      "Our precision-crafted dental crowns and bridges restore function and aesthetics to damaged or missing teeth. Using premium materials like zirconia and porcelain, we ensure long-lasting results that blend seamlessly with your natural teeth.",
    iconName: "crown",
    features: [
      "Porcelain-fused-to-metal crowns",
      "Full ceramic/zirconia crowns",
      "Fixed bridges",
      "Maryland bridges",
      "Same-day crown technology",
      "Temporary crowns",
    ],
  },
  {
    slug: "dentures",
    title: "Dentures",
    category: "Restorative",
    shortDescription: "Custom-fit complete and partial dentures for comfort.",
    description:
      "We craft comfortable, natural-looking dentures that restore your ability to eat, speak, and smile with confidence. Our dentures are custom-designed using advanced impression techniques for a precise, comfortable fit.",
    iconName: "smile",
    features: [
      "Complete dentures",
      "Partial dentures",
      "Flexible dentures",
      "Implant-supported dentures",
      "Immediate dentures",
      "Denture repair and relining",
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    category: "Preventive",
    shortDescription:
      "Gentle, child-friendly dental care for your little ones.",
    description:
      "Our pediatric dental services are designed to make dental visits fun and stress-free for children. We focus on preventive care, early detection, and creating positive dental experiences that set the foundation for a lifetime of healthy smiles.",
    iconName: "child",
    features: [
      "Child-friendly dental exams",
      "Fluoride treatments",
      "Dental sealants",
      "Space maintainers",
      "Pediatric crowns",
      "Habit-breaking appliances",
    ],
  },
  {
    slug: "gum-treatment",
    title: "Gum Treatment",
    category: "Preventive",
    shortDescription:
      "Comprehensive periodontal care for healthy gums and teeth.",
    description:
      "Our periodontal treatments address gum disease at every stage, from early gingivitis to advanced periodontitis. We use both non-surgical and surgical approaches to restore gum health and prevent tooth loss caused by periodontal disease.",
    iconName: "leaf",
    features: [
      "Scaling and root planing",
      "Gum surgery (flap surgery)",
      "Bone grafting",
      "Gum grafting",
      "Laser gum treatment",
      "Periodontal maintenance",
    ],
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    category: "Specialized",
    shortDescription:
      "Expert surgical procedures including wisdom tooth extraction.",
    description:
      "Our oral surgery services cover a wide range of procedures performed with precision and care. From wisdom tooth extractions to complex surgical interventions, we ensure patient comfort and optimal outcomes with modern surgical techniques.",
    iconName: "scalpel",
    features: [
      "Wisdom tooth extraction",
      "Surgical extractions",
      "Cyst removal",
      "Frenectomy",
      "Pre-prosthetic surgery",
      "Biopsy",
    ],
  },
  {
    slug: "preventive-dentistry",
    title: "Preventive Dentistry",
    category: "Preventive",
    shortDescription: "Regular checkups and cleaning to maintain oral health.",
    description:
      "Prevention is the cornerstone of good dental health. Our preventive dentistry program includes regular checkups, professional cleaning, oral cancer screening, and patient education to help you maintain optimal oral health for life.",
    iconName: "shield",
    features: [
      "Comprehensive dental exams",
      "Professional teeth cleaning",
      "Oral cancer screening",
      "Digital X-rays",
      "Diet and oral hygiene counseling",
      "Night guards for bruxism",
    ],
  },
  {
    slug: "dental-jewelry",
    title: "Dental Jewelry",
    category: "Cosmetic",
    shortDescription: "Add sparkle to your smile with dental gems and jewelry.",
    description:
      "Express your unique style with our dental jewelry services. We offer safe, painless application of dental gems and crystals that add a touch of glamour to your smile without any damage to your tooth enamel.",
    iconName: "diamond",
    features: [
      "Tooth gems",
      "Crystal application",
      "Gold grills (custom-fit)",
      "Tooth tattoos",
      "Safe, non-invasive application",
      "Easy removal when desired",
    ],
  },
  {
    slug: "tmj-treatment",
    title: "TMJ Treatment",
    category: "Specialized",
    shortDescription:
      "Relief from jaw pain, clicking, and temporomandibular disorders.",
    description:
      "Our TMJ treatment program provides comprehensive care for temporomandibular joint disorders. We diagnose the root cause of jaw pain, clicking, and limited movement, then develop personalized treatment plans for lasting relief.",
    iconName: "activity",
    features: [
      "TMJ diagnosis and evaluation",
      "Occlusal splint therapy",
      "Jaw exercises and physical therapy",
      "Pain management",
      "Bite adjustment",
      "Stress management counseling",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    treatment: "Dental Implants",
    rating: 5,
    quote:
      "Dr. Reddy transformed my smile with dental implants. The procedure was painless and the results are amazing. I can eat and smile confidently again!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    treatment: "Cosmetic Dentistry",
    rating: 5,
    quote:
      "I got porcelain veneers done here and they look incredibly natural. The staff is wonderful and Dr. Reddy explained every step of the process.",
  },
  {
    id: 3,
    name: "Anand Reddy",
    treatment: "Root Canal",
    rating: 5,
    quote:
      "I was terrified of root canals, but Dr. Reddy made it completely painless. The entire procedure was done in one sitting. Highly recommended!",
  },
  {
    id: 4,
    name: "Fatima Begum",
    treatment: "Orthodontics",
    rating: 5,
    quote:
      "My daughter's braces treatment was handled with such care. The results are beautiful and the regular checkups were always on schedule.",
  },
  {
    id: 5,
    name: "Suresh Babu",
    treatment: "Teeth Whitening",
    rating: 4,
    quote:
      "Professional whitening here gave me results I could never achieve at home. My teeth are several shades brighter and the effect has lasted well.",
  },
  {
    id: 6,
    name: "Lakshmi Devi",
    treatment: "Dentures",
    rating: 5,
    quote:
      "The dentures fit perfectly from day one. Dr. Reddy took the time to ensure they were comfortable and looked natural. Very grateful!",
  },
  {
    id: 7,
    name: "Mohammed Irfan",
    treatment: "Dental Implants",
    rating: 5,
    quote:
      "After losing teeth in an accident, Dr. Reddy restored my smile with implants. The care and follow-up were exceptional. Five stars!",
  },
  {
    id: 8,
    name: "Kavitha Rao",
    treatment: "Pediatric Dentistry",
    rating: 5,
    quote:
      "My kids love coming here! The team is so gentle and patient with children. Dr. Reddy makes dental visits fun and stress-free for the little ones.",
  },
];

export const DOCTOR: DoctorProfile = {
  name: "Dr. K. Mallikarjuna Reddy",
  title: "Founder & Chief Dental Surgeon",
  qualifications: ["BDS", "MDS (Prosthodontics)", "FICOI (USA)"],
  bio: "With over 11 years of experience in advanced dentistry, Dr. K.M. Reddy is a renowned dental surgeon specializing in implantology and prosthodontics. He founded K.M. Reddy Dental Care with a vision to provide world-class dental treatment accessible to everyone. His expertise spans from complex full-mouth rehabilitations to delicate cosmetic procedures, always prioritizing patient comfort and long-lasting results.",
  education: [
    {
      degree: "BDS",
      institution: "Kamineni Institute of Dental Sciences",
      year: "2011",
    },
    {
      degree: "MDS (Prosthodontics)",
      institution: "Sri Sai College of Dental Surgery",
      year: "2015",
    },
    {
      degree: "FICOI",
      institution: "International Congress of Oral Implantologists, USA",
      year: "2018",
    },
  ],
  awards: [
    {
      title: "Best Implantologist Award",
      organization: "Indian Dental Association, Telangana",
      year: "2020",
    },
    {
      title: "Excellence in Prosthodontics",
      organization: "IDA National Conference",
      year: "2019",
    },
    {
      title: "Young Dentist Award",
      organization: "Dental Council of India",
      year: "2017",
    },
  ],
  publications: [
    {
      title: "Immediate Loading Implants: A Clinical Study",
      journal: "Journal of Indian Prosthodontic Society",
      year: "2020",
    },
    {
      title: "Full Mouth Rehabilitation Using Implant-Supported Prostheses",
      journal: "International Journal of Oral Implantology",
      year: "2019",
    },
    {
      title: "CAD/CAM in Modern Prosthodontics: A Review",
      journal: "Journal of Dental Research",
      year: "2018",
    },
  ],
};

export const STATS: Stat[] = [
  { value: 11, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
  { value: 13, suffix: "", label: "Dental Services" },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Family Card", href: "/family-card" },
  { label: "Contact", href: "/contact" },
];

export const WHY_CHOOSE_US: Feature[] = [
  {
    title: "Experienced Team",
    description:
      "Over 11 years of expertise with 5000+ successful treatments and satisfied patients.",
    iconName: "award",
  },
  {
    title: "Advanced Technology",
    description:
      "State-of-the-art equipment including digital X-rays, rotary endodontics, and laser dentistry.",
    iconName: "cpu",
  },
  {
    title: "Pain-Free Procedures",
    description:
      "Modern anesthesia techniques and gentle care ensure comfortable, anxiety-free treatments.",
    iconName: "heart",
  },
  {
    title: "Affordable Care",
    description:
      "Competitive pricing with flexible payment options and family card discounts.",
    iconName: "wallet",
  },
  {
    title: "Comprehensive Services",
    description:
      "All dental specialties under one roof — from implants to orthodontics to pediatric care.",
    iconName: "layers",
  },
  {
    title: "Patient-First Approach",
    description:
      "Personalized treatment plans with thorough consultations and transparent communication.",
    iconName: "users",
  },
];

export const FAMILY_CARD: { benefits: FamilyCardBenefit[] } = {
  benefits: [
    {
      title: "Discounted Treatments",
      description:
        "Get up to 20% discount on all dental treatments for the entire family including implants, cosmetic procedures, and orthodontics.",
    },
    {
      title: "Free Annual Checkups",
      description:
        "Complimentary comprehensive dental checkups for all family members twice a year, including digital X-rays.",
    },
    {
      title: "Priority Appointments",
      description:
        "Family card holders get priority booking and shorter wait times for all appointments and emergency visits.",
    },
    {
      title: "Free Dental Cleaning",
      description:
        "One free professional dental cleaning per year for each family member to maintain optimal oral hygiene.",
    },
    {
      title: "Emergency Coverage",
      description:
        "24/7 emergency dental care with priority treatment and discounted rates for family card members.",
    },
    {
      title: "Referral Rewards",
      description:
        "Earn additional discounts by referring friends and family. Each successful referral adds to your benefits.",
    },
  ],
};

export const SAINIK_PARIVAR = {
  title: "Sainik Parivar Initiative",
  description:
    "K.M. Reddy Dental Care proudly supports the families of armed forces personnel through our Sainik Parivar initiative. We offer special discounts and priority treatment to defense personnel and their families as a token of gratitude for their service to the nation.",
  benefits: [
    "Special discounts for defense personnel and families",
    "Priority appointment scheduling",
    "Complimentary initial consultation",
    "Subsidized implant treatments",
    "Free annual dental checkups",
  ],
};
