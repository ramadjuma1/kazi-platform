import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Building2, Library, CheckCircle2, XCircle, Search, 
  FileText, Mic, Briefcase, Handshake, TrendingUp, BookOpen, Award, 
  User, MapPin, Clock, ArrowRight, 
  Mail, Phone, Menu, X, Star, Calendar, Download, Users,
  Lock, Filter, ExternalLink, Map
} from 'lucide-react';

const jobsList = [
  { id: 1, title: 'Assistant Ressources Humaines', company: 'Rawbank', location: 'Kinshasa', type: 'Rémunéré', time: 'Temps plein', duration: '3 mois', domain: 'rh', color: 'bg-purple-100', textCol: 'text-purple-700', initial: 'R' },
  { id: 2, title: 'Stagiaire Analyste Financier', company: 'ARSP', location: 'Kinshasa', type: 'Non rémunéré', time: 'Temps partiel', duration: '6 mois', domain: 'finance', color: 'bg-blue-100', textCol: 'text-blue-700', initial: 'A' },
  { id: 3, title: 'Assistant Marketing Digital', company: 'Vodacom RDC', location: 'Kinshasa', type: 'Rémunéré', time: 'Temps plein', duration: '3 mois', domain: 'marketing', color: 'bg-red-100', textCol: 'text-red-700', initial: 'V' },
  { id: 4, title: 'Développeur Web Junior', company: 'Illicocash', location: 'Kinshasa', type: 'Rémunéré', time: 'Temps plein', duration: '6 mois', domain: 'it', color: 'bg-yellow-100', textCol: 'text-yellow-700', initial: 'I' },
  { id: 5, title: 'Assistant Logistique', company: 'UNICEF', location: 'Goma', type: 'Indemnité', time: 'Temps plein', duration: '3 mois', domain: 'logistique', color: 'bg-cyan-100', textCol: 'text-cyan-700', initial: 'U' },
  { id: 6, title: 'Stagiaire Comptable', company: 'KPMG RDC', location: 'Lubumbashi', type: 'Rémunéré', time: 'Temps plein', duration: '6 mois', domain: 'finance', color: 'bg-indigo-100', textCol: 'text-indigo-700', initial: 'K' },
  { id: 7, title: 'Assistant Informatique (Réseaux)', company: 'Orange', location: 'Kinshasa', type: 'Rémunéré', time: 'Temps plein', duration: '3 mois', domain: 'it', color: 'bg-orange-100', textCol: 'text-orange-700', initial: 'O' },
  { id: 8, title: 'Community Manager', company: 'Bracongo', location: 'Kinshasa', type: 'Indemnité', time: 'Temps partiel', duration: '3 mois', domain: 'marketing', color: 'bg-amber-100', textCol: 'text-amber-700', initial: 'B' },
  { id: 9, title: 'Gestionnaire de Paie', company: 'TMB', location: 'Lubumbashi', type: 'Rémunéré', time: 'Temps plein', duration: '6 mois', domain: 'rh', color: 'bg-emerald-100', textCol: 'text-emerald-700', initial: 'T' },
  { id: 10, title: 'Data Analyst Stagiaire', company: 'Airtel', location: 'Goma', type: 'Rémunéré', time: 'Temps plein', duration: '6 mois', domain: 'it', color: 'bg-rose-100', textCol: 'text-rose-700', initial: 'A' },
];

const candidatesList = [
  { id: 1, name: 'Moïse Elembo', job: 'Analyste Financier', domain: 'finance', score: 95, initial: 'M', color: 'bg-blue-100 text-blue-700', univ: 'LAU University' },
  { id: 2, name: 'Kethia Mutoke', job: 'Assistant RH', domain: 'rh', score: 90, initial: 'K', color: 'bg-purple-100 text-purple-700', univ: 'LAU University' },
  { id: 3, name: 'Paku Edingwe', job: 'Marketing Digital', domain: 'marketing', score: 88, initial: 'P', color: 'bg-orange-100 text-orange-700', univ: 'UNIKIN' },
  { id: 4, name: 'Kenny Joyce', job: 'Développeur Web', domain: 'it', score: 92, initial: 'K', color: 'bg-green-100 text-green-700', univ: 'ISIPA' },
  { id: 5, name: 'Kevine Imana', job: 'Logistique / Supply Chain', domain: 'logistique', score: 85, initial: 'K', color: 'bg-cyan-100 text-cyan-700', univ: 'UPC' },
  { id: 6, name: 'Sarah Lumbala', job: 'Comptabilité', domain: 'finance', score: 89, initial: 'S', color: 'bg-indigo-100 text-indigo-700', univ: 'ISC' },
  { id: 7, name: 'Jonathan Tshibangu', job: 'Réseaux Informatiques', domain: 'it', score: 91, initial: 'J', color: 'bg-slate-200 text-slate-700', univ: 'ISTA' }
];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // home, student, enterprise, login, jobs, job_details, candidate_profile
  const [viewData, setViewData] = useState(null); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view, data = null) => {
    setCurrentView(view);
    setViewData(data);
    setIsMobileMenuOpen(false);
  };

  const notify = (title, message, type = 'success') => {
    setNotification({ title, message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800 relative">
      
      {/* Toast Notification System */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-[100] animate-bounce">
          <div className={`bg-white border-l-4 ${notification.type === 'success' ? 'border-[#4caf50]' : 'border-blue-500'} rounded-lg shadow-2xl p-4 flex gap-4 max-w-sm items-start`}>
            {notification.type === 'success' ? <CheckCircle2 className="text-[#4caf50] mt-0.5" /> : <Clock className="text-blue-500 mt-0.5" />}
            <div>
              <h4 className="font-bold text-slate-800">{notification.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
            </div>
            <button onClick={() => setNotification(null)} className="text-gray-400 hover:text-gray-600 ml-auto">
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="flex items-center gap-3">
                {/* LOCAL LOGO PLACEHOLDER: Placer logo.png dans le dossier public/ de Vite */}
                <img src="/logo.png" alt="" className="h-10 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="text-3xl font-extrabold tracking-tight">
                  <span className="text-[#1a365d]">Kazi</span><span className="text-[#2e7d32]">Link</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateTo('home')} className={`font-medium ${currentView === 'home' ? 'text-[#2e7d32]' : 'text-gray-600 hover:text-[#1a365d]'}`}>Accueil</button>
              <button onClick={() => navigateTo('jobs')} className={`font-medium ${currentView === 'jobs' ? 'text-[#2e7d32]' : 'text-gray-600 hover:text-[#1a365d]'}`}>Offres</button>
              <button onClick={() => navigateTo('student')} className={`font-medium ${currentView === 'student' ? 'text-[#2e7d32]' : 'text-gray-600 hover:text-[#1a365d]'}`}>Espace Étudiant</button>
              <button onClick={() => navigateTo('enterprise')} className={`font-medium ${currentView === 'enterprise' ? 'text-[#2e7d32]' : 'text-gray-600 hover:text-[#1a365d]'}`}>Espace Entreprise</button>
              <button onClick={() => navigateTo('login')} className="bg-[#1a365d] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-colors shadow-md">
                Connexion
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t absolute w-full shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => navigateTo('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2e7d32] hover:bg-gray-50">Accueil</button>
              <button onClick={() => navigateTo('jobs')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2e7d32] hover:bg-gray-50">Offres de stage</button>
              <button onClick={() => navigateTo('student')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2e7d32] hover:bg-gray-50">Espace Étudiant</button>
              <button onClick={() => navigateTo('enterprise')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2e7d32] hover:bg-gray-50">Espace Entreprise</button>
              <button onClick={() => navigateTo('login')} className="block w-full text-left px-3 py-2 text-base font-bold text-[#1a365d] hover:bg-gray-50 mt-4">Se connecter</button>
            </div>
          </div>
        )}
      </nav>

      {}
      <main className="min-h-[calc(100vh-400px)]">
        {currentView === 'home' && <HomeView navigateTo={navigateTo} />}
        {currentView === 'student' && <StudentDashboard navigateTo={navigateTo} notify={notify} />}
        {currentView === 'enterprise' && <EnterpriseDashboard navigateTo={navigateTo} notify={notify} />}
        {currentView === 'login' && <AuthView navigateTo={navigateTo} notify={notify} />}
        {currentView === 'jobs' && <JobsListView navigateTo={navigateTo} notify={notify} />}
        {currentView === 'job_details' && <JobDetailsView navigateTo={navigateTo} notify={notify} jobData={viewData} />}
        {currentView === 'candidate_profile' && <CandidateProfileView navigateTo={navigateTo} notify={notify} candidateData={viewData} />}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="text-3xl font-extrabold mb-4 cursor-pointer flex items-center gap-3" onClick={() => navigateTo('home')}>
                <img src="/logo.png" alt="" className="h-8 w-auto filter brightness-0 invert" onError={(e) => { e.target.style.display = 'none'; }} />
                <div><span className="text-white">Kazi</span><span className="text-[#4caf50]">Link</span></div>
              </div>
              <p className="text-gray-300 mb-6 text-sm">
                Stage Connect RDC<br/>
                Le pont entre les étudiants et les entreprises.
              </p>
              <div className="flex space-x-4">
                <button onClick={() => notify('Réseaux', 'Redirection Facebook', 'info')} className="text-gray-300 hover:text-white transition-colors font-bold">FB</button>
                <button onClick={() => notify('Réseaux', 'Redirection LinkedIn', 'info')} className="text-gray-300 hover:text-white transition-colors font-bold">IN</button>
                <button onClick={() => notify('Réseaux', 'Redirection Instagram', 'info')} className="text-gray-300 hover:text-white transition-colors font-bold">IG</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#4caf50]">Navigation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Accueil</button></li>
                <li><button onClick={() => navigateTo('jobs')} className="hover:text-white transition-colors">Toutes les offres</button></li>
                <li><button onClick={() => navigateTo('student')} className="hover:text-white transition-colors">Espace Étudiants</button></li>
                <li><button onClick={() => navigateTo('enterprise')} className="hover:text-white transition-colors">Espace Entreprises</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#4caf50]">Légal</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><button onClick={() => notify('Info', 'Page en rédaction', 'info')} className="hover:text-white transition-colors">Conditions d'utilisation</button></li>
                <li><button onClick={() => notify('Info', 'Page en rédaction', 'info')} className="hover:text-white transition-colors">Politique de confidentialité</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#4caf50]">Contact</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#4caf50]" />
                  <span>Kinshasa/Gombe, RDC<br/>Leadership Academia University</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0 text-[#4caf50]" />
                  <span>+243 80 000 00 00</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0 text-[#4caf50]" />
                  <span>contact@kazilink.cd</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2026 KaziLink - Stage Connect RDC. Tous droits réservés.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Projet L3 LMD - LAU</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const HomeView = ({ navigateTo }) => (
  <div className="animate-fade-in">
    {/* Section 1: Hero */}
    <section className="relative bg-gradient-to-br from-[#1a365d] to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left z-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-400 text-blue-200 text-sm font-semibold mb-6 shadow-sm">
            Stage Connect RDC
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Trouvez votre stage.<br/>
            <span className="text-[#4caf50]">Construisez votre carrière.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0">
            KaziLink facilite la rencontre entre les étudiants, les universités et les entreprises afin de favoriser une insertion professionnelle plus rapide et plus équitable en RDC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={() => navigateTo('login')} className="flex items-center justify-center gap-2 bg-[#4caf50] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1">
              <GraduationCap size={24} />
              Je suis étudiant
            </button>
            <button onClick={() => navigateTo('login')} className="flex items-center justify-center gap-2 bg-white text-[#1a365d] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1">
              <Building2 size={24} />
              Je suis recruteur
            </button>
          </div>
        </div>
        
        {/* Updated Hero Image with corporate black woman */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative w-full max-w-lg mx-auto flex justify-center z-10">
            {/* Blobs for background effect */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#4caf50] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute top-10 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
            
            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Professionnelle Africaine" 
              className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] shadow-2xl border-4 border-white/20 transform hover:scale-[1.02] transition-transform duration-500"
            />
        </div>
      </div>
    </section>

    {}
    {/* Section 8: Recherche Intelligente */}
    <section className="bg-white py-10 border-b border-gray-200 relative -mt-8 z-30 max-w-5xl mx-auto rounded-2xl shadow-xl px-6 md:px-10">
      <h2 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center gap-2">
        <Search size={24} className="text-[#2e7d32]" />
        Recherche Rapide de Stages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input type="text" placeholder="Poste, mots-clés..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e7d32] col-span-1 md:col-span-2" />
        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e7d32] text-gray-600">
          <option>Toutes les villes</option>
          <option>Kinshasa</option>
          <option>Lubumbashi</option>
          <option>Goma</option>
        </select>
        <button onClick={() => navigateTo('jobs')} className="w-full bg-[#1a365d] text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors shadow-md flex items-center justify-center gap-2">
          Rechercher
        </button>
      </div>
      <div className="flex gap-4 mt-4 text-sm text-gray-500 overflow-x-auto pb-2">
        <span className="whitespace-nowrap font-medium text-gray-700">Filtres :</span>
        <button onClick={() => navigateTo('jobs')} className="whitespace-nowrap cursor-pointer hover:text-[#2e7d32] bg-gray-100 px-3 py-1 rounded-full hover:bg-green-50 transition-colors">Finance</button>
        <button onClick={() => navigateTo('jobs')} className="whitespace-nowrap cursor-pointer hover:text-[#2e7d32] bg-gray-100 px-3 py-1 rounded-full hover:bg-green-50 transition-colors">Ressources Humaines</button>
        <button onClick={() => navigateTo('jobs')} className="whitespace-nowrap cursor-pointer hover:text-[#2e7d32] bg-gray-100 px-3 py-1 rounded-full hover:bg-green-50 transition-colors">Informatique</button>
      </div>
    </section>

    {}
    {/* Section 2: Pourquoi */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">Pourquoi choisir KaziLink ?</h2>
          <div className="w-24 h-1 bg-[#2e7d32] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="bg-red-100 p-2 rounded-lg text-red-600"><XCircle size={28} /></span>
              Le problème actuel
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <XCircle size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Peu d'offres de stage centralisées et accessibles à tous.</span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">L'accès aux stages repose souvent sur du favoritisme (les relations).</span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Les entreprises ont du mal à identifier les bons profils qualifiés.</span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">Les étudiants manquent d'accompagnement.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a365d] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <span className="bg-green-500/20 p-2 rounded-lg text-[#4caf50]"><CheckCircle2 size={28} /></span>
              Notre solution
            </h3>
            <ul className="space-y-5 relative z-10">
              <li className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#4caf50] flex-shrink-0 mt-0.5" />
                <span className="font-medium text-blue-50">Centraliser toutes les offres de stage sur une seule plateforme.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#4caf50] flex-shrink-0 mt-0.5" />
                <span className="font-medium text-blue-50">Accompagner les étudiants avec du coaching et des ressources.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#4caf50] flex-shrink-0 mt-0.5" />
                <span className="font-medium text-blue-50">Présélectionner les meilleurs profils sur la base du mérite.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#4caf50] flex-shrink-0 mt-0.5" />
                <span className="font-medium text-blue-50">Assurer un suivi du stage entre l'université et l'entreprise.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {}
    {/* Section 3: Notre Mission */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">Une mission tripartie</h2>
          <div className="w-24 h-1 bg-[#2e7d32] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200 group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap size={40} className="text-[#1a365d]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Étudiants</h3>
            <p className="text-gray-600">
              Aide pour décrocher le premier stage en valorisant les compétences et préparant au monde professionnel.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-gray-100 hover:border-green-200 group">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Building2 size={40} className="text-[#2e7d32]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Entreprises</h3>
            <p className="text-gray-600">
              Gain de temps via une présélection rapide de profils motivés et qualifiés correspondant aux besoins réels.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-gray-100 hover:border-purple-200 group">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Library size={40} className="text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Universités</h3>
            <p className="text-gray-600">
              Rapprochement avec le monde professionnel en facilitant le suivi académique et l'insertion des cohortes.
            </p>
          </div>
        </div>
      </div>
    </section>

    {}
    {/* Section 9: Chiffres du projet */}
    <section className="py-20 bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Un projet fondé sur des données réelles</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">Notre plateforme a été pensée sur la base d'une étude de terrain menée à Kinshasa auprès des acteurs concernés.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-extrabold text-[#4caf50] mb-2">101</div>
            <p className="text-blue-100 font-medium">Étudiants interrogés</p>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-[#4caf50] mb-2">16</div>
            <p className="text-blue-100 font-medium">Entreprises consultées</p>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-[#4caf50] mb-2">86%</div>
            <p className="text-blue-100 font-medium">Rencontrent des difficultés</p>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-[#4caf50] mb-2">30%</div>
            <p className="text-blue-100 font-medium">Profils Gestion/Éco</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);


const AuthView = ({ navigateTo, notify }) => {
  const [role, setRole] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(role === 'student') {
      notify('Connexion réussie', 'Bienvenue dans votre espace Étudiant.');
      navigateTo('student');
    } else {
      notify('Connexion réussie', 'Bienvenue dans votre espace Recruteur.');
      navigateTo('enterprise');
    }
  };

  return (
    <div className="animate-fade-in min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-2">
            <img src="/logo.png" alt="" className="h-8 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="text-4xl font-extrabold tracking-tight">
              <span className="text-[#1a365d]">Kazi</span><span className="text-[#4caf50]">Link</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Connexion</h2>
          <p className="text-gray-500 mt-2">Accédez à votre espace pour continuer.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Vous êtes :</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e7d32] focus:border-[#2e7d32] outline-none font-medium text-gray-700"
            >
              <option value="student">👨‍🎓 Étudiant / Chercheur de stage</option>
              <option value="enterprise">🏢 Entreprise / Recruteur</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input type="email" required className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e7d32] outline-none" placeholder="votre@email.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mot de passe</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input type="password" required className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e7d32] outline-none" placeholder="••••••••" />
            </div>
            <div className="flex justify-end mt-2">
              <button type="button" onClick={() => notify('Info', 'Lien de réinitialisation envoyé.', 'info')} className="text-sm text-[#2e7d32] hover:underline font-medium">Mot de passe oublié ?</button>
            </div>
          </div>

          <button type="submit" className="w-full flex justify-center py-3.5 px-4 rounded-xl shadow-md text-sm font-bold text-white bg-[#1a365d] hover:bg-blue-900 transition-colors mt-6">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

const JobsListView = ({ navigateTo, notify }) => {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('all');
  const [type, setType] = useState('all');
  const [domain, setDomain] = useState('all');

  const filteredJobs = jobsList.filter(job => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase());
    const matchCity = city === 'all' || job.location === city;
    const matchType = type === 'all' || job.type === type;
    const matchDomain = domain === 'all' || job.domain === domain;
    return matchSearch && matchCity && matchType && matchDomain;
  });

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Header */}
        <div className="bg-[#1a365d] rounded-3xl p-8 mb-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <h1 className="text-3xl font-bold mb-6 relative z-10">Trouvez le stage idéal</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
              <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Poste, entreprise, mots-clés..." className="w-full pl-12 pr-4 py-3 bg-white border-0 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-[#4caf50] shadow-inner" />
            </div>
            <select value={city} onChange={(e)=>setCity(e.target.value)} className="w-full px-4 py-3 bg-white border-0 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-[#4caf50] shadow-inner font-medium">
              <option value="all">📍 Toutes les villes</option>
              <option value="Kinshasa">Kinshasa</option>
              <option value="Lubumbashi">Lubumbashi</option>
              <option value="Goma">Goma</option>
            </select>
            <select value={type} onChange={(e)=>setType(e.target.value)} className="w-full px-4 py-3 bg-white border-0 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-[#4caf50] shadow-inner font-medium">
              <option value="all">💼 Tous les types</option>
              <option value="Rémunéré">Rémunéré</option>
              <option value="Non rémunéré">Non rémunéré</option>
              <option value="Indemnité">Prime / Indemnité</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-800"><Filter size={20} className="text-[#2e7d32]" /> Filtres par Domaine</h3>
              <div className="space-y-3">
                {[
                  { id: 'all', label: 'Tous les domaines' },
                  { id: 'finance', label: 'Finance & Compta' },
                  { id: 'rh', label: 'Ressources Humaines' },
                  { id: 'marketing', label: 'Marketing & Com' },
                  { id: 'it', label: 'Informatique (IT)' },
                  { id: 'logistique', label: 'Logistique' }
                ].map(d => (
                  <label key={d.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                    <input type="radio" name="domain" checked={domain === d.id} onChange={() => setDomain(d.id)} className="w-4 h-4 text-[#2e7d32] focus:ring-[#2e7d32]" />
                    <span className="text-sm font-medium text-gray-700">{d.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-700">{filteredJobs.length} offre(s) disponible(s)</h2>
            </div>
            
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
                 <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                 <h3 className="text-xl font-bold text-gray-700 mb-2">Aucun stage trouvé</h3>
                 <p className="text-gray-500">Essayez de modifier vos filtres de recherche.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.map(job => (
                  <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-4">
                        <div className={`w-14 h-14 ${job.color} ${job.textCol} rounded-xl flex items-center justify-center font-bold text-2xl flex-shrink-0`}>{job.initial}</div>
                        <div>
                          <h3 className="font-bold text-lg text-[#1a365d] mb-1 leading-tight">{job.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Building2 size={14} /> <span className="font-medium">{job.company}</span>
                            <span>•</span>
                            <MapPin size={14} /> <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      <span className={`px-3 py-1 rounded-md text-xs font-bold ${job.type === 'Rémunéré' ? 'bg-green-100 text-green-700' : job.type === 'Non rémunéré' ? 'bg-gray-200 text-gray-700' : 'bg-blue-100 text-blue-700'}`}>{job.type}</span>
                      <span className="bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1 rounded-md text-xs font-medium">{job.duration}</span>
                    </div>
                    <div className="flex gap-3 border-t border-gray-100 pt-5">
                      <button onClick={() => notify('Succès', `Candidature envoyée à ${job.company}.`)} className="bg-[#1a365d] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-900 transition-colors flex-1 shadow-sm">Postuler</button>
                      <button onClick={() => navigateTo('job_details', job)} className="bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">Détails</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const JobDetailsView = ({ navigateTo, notify, jobData }) => {
  const job = jobData || jobsList[0]; // fallback

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigateTo('jobs')} className="text-gray-500 hover:text-[#1a365d] font-medium flex items-center gap-2 mb-6 transition-colors"><ArrowRight className="rotate-180 w-4 h-4" /> Retour aux offres</button>
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-[#1a365d] p-8 md:p-10 text-white flex flex-col md:flex-row justify-between md:items-center gap-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
             <div className="flex items-center gap-6 relative z-10">
                <div className={`w-20 h-20 bg-white ${job.textCol} rounded-2xl flex items-center justify-center font-bold text-4xl shadow-md`}>{job.initial}</div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold mb-1">{job.title}</h1>
                  <h2 className="text-lg text-blue-200 font-medium">{job.company}</h2>
                </div>
             </div>
             <button onClick={() => notify('Succès', 'Votre candidature a bien été envoyée.')} className="bg-[#4caf50] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-green-600 transition-transform transform hover:-translate-y-1 relative z-10 whitespace-nowrap">
                Postuler maintenant
             </button>
          </div>
          <div className="flex flex-wrap border-b border-gray-100 bg-gray-50/80 p-6 gap-y-6">
            <div className="w-1/2 md:w-1/4 px-4 flex items-center gap-3 border-r border-gray-200"><MapPin className="text-[#2e7d32] w-5 h-5" /><div><p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Lieu</p><p className="font-bold text-slate-800">{job.location}</p></div></div>
            <div className="w-1/2 md:w-1/4 px-4 flex items-center gap-3 md:border-r border-gray-200"><Clock className="text-[#2e7d32] w-5 h-5" /><div><p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Durée</p><p className="font-bold text-slate-800">{job.duration}</p></div></div>
            <div className="w-1/2 md:w-1/4 px-4 flex items-center gap-3 border-r border-gray-200"><Briefcase className="text-[#2e7d32] w-5 h-5" /><div><p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Contrat</p><p className="font-bold text-slate-800">Stage Acad.</p></div></div>
            <div className="w-1/2 md:w-1/4 px-4 flex items-center gap-3"><Award className="text-[#2e7d32] w-5 h-5" /><div><p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Avantage</p><p className="font-bold text-[#2e7d32]">{job.type}</p></div></div>
          </div>
          
          <div className="p-8 md:p-10 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2"><FileText className="text-[#2e7d32] w-5 h-5" /> Description des missions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#4caf50] w-5 h-5 flex-shrink-0 mt-0.5" /> Assister l'équipe dans les tâches quotidiennes et opérationnelles.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#4caf50] w-5 h-5 flex-shrink-0 mt-0.5" /> Participer à la gestion des dossiers et à l'analyse des données.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#4caf50] w-5 h-5 flex-shrink-0 mt-0.5" /> Contribuer à la rédaction de rapports et de présentations.</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-[#1a365d] flex-shrink-0"><Star className="w-6 h-6 fill-yellow-400 text-yellow-400" /></div>
              <div className="w-full">
                <h4 className="font-bold text-[#1a365d] text-lg mb-1">Avis KaziLink</h4>
                <p className="text-gray-700 text-sm mb-3">Ce stage présente un excellent taux de pertinence (92%) avec votre profil actuel.</p>
                <div className="w-full bg-blue-200 rounded-full h-2"><div className="bg-[#4caf50] h-2 rounded-full w-[92%]"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentDashboard = ({ navigateTo, notify }) => {
  const [studentDomain, setStudentDomain] = useState('all');

  const recJobs = studentDomain === 'all' 
    ? jobsList.slice(0, 4) 
    : jobsList.filter(j => j.domain === studentDomain).slice(0, 3);

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-20">
      <div className="bg-[#1a365d] pb-32 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-[#1a365d] shadow-lg">KM</div>
            <div>
              <h1 className="text-3xl font-bold text-white">Bonjour Kethia 👋</h1>
              <p className="text-blue-200">Étudiante en Administration des Affaires, L3 LMD - LAU</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-slate-800 mb-4 flex justify-between">Progression <span>90%</span></h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6"><div className="bg-[#4caf50] h-2.5 rounded-full w-[90%]"></div></div>
              <h4 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">À faire aujourd'hui</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600 line-through"><CheckCircle2 size={18} className="text-green-500" /> CV complété</li>
                <li className="flex items-center gap-3 text-gray-600 line-through"><CheckCircle2 size={18} className="text-green-500" /> Compétences ajoutées</li>
                <li className="flex items-center gap-3 text-[#1a365d] font-medium bg-blue-50 p-2 rounded-lg border border-blue-100"><div className="w-4 h-4 rounded-full border-2 border-[#1a365d] flex-shrink-0"></div> Postuler à une offre</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-700 mb-4">Actions rapides</h4>
              <div className="space-y-2">
                <button onClick={() => notify('Téléchargement', 'Génération du CV PDF en cours.', 'info')} className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm font-medium text-gray-700 flex justify-between items-center transition-colors"><span>Générer mon CV PDF</span> <Download size={16} /></button>
                <button onClick={() => notify('Coaching', 'Demande envoyée au conseiller.')} className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm font-medium text-gray-700 flex justify-between items-center transition-colors"><span>Réserver un coaching</span> <Calendar size={16} /></button>
                <button onClick={() => navigateTo('jobs')} className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm font-medium text-gray-700 flex justify-between items-center transition-colors"><span>Rechercher un stage</span> <Search size={16} /></button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4 gap-4">
               <h3 className="text-lg font-bold text-[#1a365d] flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> Recommandées pour vous</h3>
               <select value={studentDomain} onChange={(e)=>setStudentDomain(e.target.value)} className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7d32]">
                  <option value="all">Tous les domaines</option>
                  <option value="rh">Ressources Humaines</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
               </select>
            </div>
            
            <div className="space-y-4">
              {recJobs.length === 0 ? (
                <p className="text-gray-500 p-4 text-center bg-white rounded-xl border border-gray-100">Aucune offre recommandée pour ce domaine.</p>
              ) : (
                recJobs.map(job => (
                  <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#4caf50] transition-colors shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${job.color} ${job.textCol} rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0`}>{job.initial}</div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg leading-tight">{job.title}</h4>
                        <p className="text-sm text-gray-500 font-medium">{job.company} • {job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <span className={`px-3 py-1 rounded-md text-xs font-bold hidden sm:block ${job.type === 'Rémunéré' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'}`}>{job.type}</span>
                      <button onClick={() => notify('Succès', 'Candidature envoyée.')} className="bg-[#1a365d] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-900 transition-colors flex-1 md:flex-none">Postuler</button>
                      <button onClick={() => navigateTo('job_details', job)} className="bg-gray-100 text-gray-700 p-2.5 rounded-lg hover:bg-gray-200 transition-colors"><ExternalLink size={16} /></button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="text-center pt-4">
              <button onClick={() => navigateTo('jobs')} className="text-[#2e7d32] font-bold hover:underline">Explorer toutes les offres →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnterpriseDashboard = ({ navigateTo, notify }) => {
  const [searchCand, setSearchCand] = useState('');
  const [domainCand, setDomainCand] = useState('all');

  const filteredCandidates = candidatesList.filter(c => {
    const matchName = c.name.toLowerCase().includes(searchCand.toLowerCase()) || c.job.toLowerCase().includes(searchCand.toLowerCase());
    const matchDomain = domainCand === 'all' || c.domain === domainCand;
    return matchName && matchDomain;
  });

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-20">
      <div className="bg-gradient-to-r from-[#2e7d32] to-green-800 pb-32 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#2e7d32] shadow-lg"><Building2 size={32} /></div>
            <div>
              <h1 className="text-3xl font-bold text-white">Espace Recruteur - ARSP</h1>
              <p className="text-green-100">Tableau de bord de gestion des stagiaires</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        {/* KPI */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
            <div><p className="text-xs text-gray-500 font-medium uppercase">Candidatures</p><h3 className="text-2xl font-bold text-slate-800">42</h3></div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><FileText size={20} /></div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
            <div><p className="text-xs text-gray-500 font-medium uppercase">Entretiens</p><h3 className="text-2xl font-bold text-slate-800">12</h3></div>
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600"><Calendar size={20} /></div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
            <div><p className="text-xs text-gray-500 font-medium uppercase">Recrutés</p><h3 className="text-2xl font-bold text-[#2e7d32]">5</h3></div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle2 size={20} /></div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
            <div><p className="text-xs text-gray-500 font-medium uppercase">Offres Actives</p><h3 className="text-2xl font-bold text-purple-600">3</h3></div>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><Briefcase size={20} /></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h4 className="font-semibold mb-4 text-slate-800">Actions Rapides</h4>
              <button onClick={() => notify('Info', 'Éditeur d\'offres ouvert.', 'info')} className="w-full mb-3 bg-[#1a365d] text-white py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors shadow-sm">Nouvelle offre</button>
              <button onClick={() => notify('Info', 'Archive ZIP en préparation.', 'info')} className="w-full bg-gray-50 py-3 rounded-xl border border-gray-200 font-medium text-sm text-gray-700 flex justify-center items-center gap-2 hover:bg-gray-100"><Download size={16} /> Exporter CVs</button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50/50">
                <h3 className="text-xl font-bold text-[#1a365d]">Base de Candidats</h3>
                <div className="flex gap-3 w-full md:w-auto">
                  <input type="text" value={searchCand} onChange={(e)=>setSearchCand(e.target.value)} placeholder="Rechercher un nom..." className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm flex-1 focus:ring-2 focus:ring-[#2e7d32] outline-none" />
                  <select value={domainCand} onChange={(e)=>setDomainCand(e.target.value)} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2e7d32] outline-none">
                    <option value="all">Tous profils</option>
                    <option value="finance">Finance / Éco</option>
                    <option value="rh">Ressources Humaines</option>
                    <option value="it">Informatique</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead class="bg-gray-50 text-gray-500">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Candidat</th>
                      <th className="px-6 py-4 font-semibold">Université</th>
                      <th className="px-6 py-4 font-semibold">Domaine visé</th>
                      <th className="px-6 py-4 font-semibold">Matching</th>
                      <th className="px-6 py-4 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredCandidates.length === 0 ? (
                      <tr><td colSpan="5" className="py-8 text-center text-gray-500">Aucun candidat trouvé.</td></tr>
                    ) : (
                      filteredCandidates.map(c => (
                        <tr key={c.id} className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-9 h-9 rounded-full ${c.color} flex items-center justify-center font-bold`}>{c.initial}</div>
                              <span className="font-bold text-slate-800">{c.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-600 font-medium">{c.univ}</td>
                          <td className="px-6 py-4 text-gray-600 font-medium">{c.job}</td>
                          <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-bold">{c.score}%</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button onClick={() => navigateTo('candidate_profile', c)} className="text-blue-600 hover:text-blue-800 hover:underline font-bold bg-blue-50 px-4 py-2 rounded-lg transition-colors">Voir profil</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CandidateProfileView = ({ navigateTo, notify, candidateData }) => {
  const candidate = candidateData || candidatesList[0];

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigateTo('enterprise')} className="text-gray-500 hover:text-[#1a365d] font-medium flex items-center gap-2 mb-6 transition-colors"><ArrowRight className="rotate-180 w-4 h-4" /> Retour à la base</button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-5xl font-extrabold mb-6 shadow-inner ${candidate.color}`}>
                {candidate.initial}
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-1">{candidate.name}</h2>
              <p className="text-gray-500 font-medium mb-6">{candidate.univ}</p>
              
              <div className="space-y-3">
                <button onClick={() => notify('Téléchargement', 'CV en cours de téléchargement...', 'info')} className="w-full py-3 flex items-center justify-center gap-2 bg-[#1a365d] text-white rounded-xl font-bold hover:bg-blue-900 transition-colors shadow-md"><Download size={20} /> Télécharger le CV</button>
                <button onClick={() => notify('Message', 'Interface de messagerie ouverte.', 'info')} className="w-full py-3 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"><Mail size={20} /> Contacter</button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-slate-800 mb-4 text-lg">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600"><div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#2e7d32]"><MapPin size={16} /></div> <span className="text-sm font-medium">Kinshasa / Gombe</span></div>
                <div className="flex items-center gap-3 text-gray-600"><div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#2e7d32]"><Phone size={16} /></div> <span className="text-sm font-medium">+243 82 000 00 00</span></div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-1">Analyse KaziLink</h3>
                  <p className="text-gray-600 font-medium">Profil évalué pour : <span className="text-[#1a365d] font-bold">{candidate.job}</span></p>
                </div>
                <div className="text-center bg-white shadow-md p-3 rounded-2xl border border-gray-50">
                  <div className="text-3xl font-extrabold text-[#4caf50]">{candidate.score}%</div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">Matching</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><CheckCircle2 className="text-[#2e7d32] w-5 h-5" /> Compétences Validées</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold border border-blue-100">Analyse de données</span>
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold border border-blue-100">Travail en équipe</span>
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold border border-blue-100">Anglais pro</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><GraduationCap className="text-[#2e7d32] w-5 h-5" /> Parcours Académique</h4>
                  <div className="relative border-l-2 border-blue-200 ml-3 pl-6 pb-6">
                    <div className="absolute w-4 h-4 bg-[#1a365d] rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
                    <h5 className="font-bold text-gray-800 text-lg">Licence 3</h5>
                    <p className="text-sm font-medium text-[#1a365d] mt-1">{candidate.univ}</p>
                    <p className="text-xs text-gray-500 mt-1">2025 - 2026</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <button onClick={() => notify('Succès', 'Invitation pour un entretien envoyée.')} className="flex-1 bg-[#4caf50] text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1">Proposer un entretien</button>
                <button onClick={() => notify('Info', 'Candidature refusée poliment.', 'info')} className="bg-white border-2 border-gray-200 text-gray-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 font-bold py-4 px-8 rounded-xl transition-colors">Décliner</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};