import Link from 'next/link'
import { accentE } from '@/lib/accentE'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/images/logo-footer.png" alt="Balloons Calgary" className="footer-logo" />
            <p>{accentE('Beautiful balloon arrangements for your special moments. Handcrafted with love for birthdays, baby showers, romantic surprises, and every celebration in between.')}</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/balloons_calgary_yyc?igsh=Y3RsN29jN3pkNXZw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                {/* lucide: instagram */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/catalog">Collections</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/cart">Cart</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:ballooncalgary@gmail.com">ballooncalgary@gmail.com</a></li>
              <li><a href="tel:+18252886133">+1 (825) 288-6133</a></li>
              <li>Calgary, Alberta, Canada</li>
              <li><a href="https://www.instagram.com/balloons_calgary_yyc?igsh=Y3RsN29jN3pkNXZw" target="_blank" rel="noopener noreferrer">@balloons_calgary_yyc</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024-2026 Balloons Calgary. All rights {accentE('reserved')}.</p>
        </div>
      </div>
    </footer>
  )
}
