# TriggerTechLabs - Bilal Hassan Portfolio

A modern, accessible, and SEO-optimized portfolio website built with React, showcasing full-stack development skills and projects.

## 🌟 Features

### Accessibility (WCAG 2.1 AA Compliant)
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Support**: Proper ARIA labels, roles, and semantic HTML
- **Skip Links**: Quick navigation to main content for keyboard users
- **Reduced Motion**: Respects user's motion preferences
- **High Contrast**: Enhanced visibility for users with visual impairments
- **Form Accessibility**: Proper labels, error handling, and validation feedback
- **Mobile Menu**: Accessible hamburger menu with focus management

### SEO Optimizations
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema markup for better search results
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Proper crawler guidance
- **Performance**: Optimized build configuration and asset loading
- **PWA Ready**: Web app manifest for mobile installation

### Technical Features
- **React 19**: Latest React with modern hooks and features
- **Vite**: Fast build tool with optimized configuration
- **SCSS**: Modular styling with accessibility-focused design
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Form Handling**: Formspree integration with validation
- **Toast Notifications**: Accessible feedback system
- **Error Boundaries**: Graceful error handling

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/triggertechlabs.git
cd triggertechlabs

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card/           # Card component with accessibility
│   ├── Nav/            # Navigation with mobile menu
│   ├── Footer/         # Footer component
│   └── ...
├── Pages/              # Page components
│   ├── Home/           # Landing page
│   ├── Projects/       # Portfolio projects
│   ├── Contact/        # Contact form
│   └── ...
├── hooks/              # Custom React hooks
├── styles/             # SCSS styles and variables
└── data/               # Static data and content
```

## ♿ Accessibility Features

### Keyboard Navigation
- **Tab Navigation**: All interactive elements are keyboard accessible
- **Focus Indicators**: Clear visual focus states with custom styling
- **Skip Links**: Jump to main content, bypassing navigation
- **Escape Key**: Close modals and menus with Escape key

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy and landmark roles
- **ARIA Labels**: Descriptive labels for interactive elements
- **Live Regions**: Dynamic content announcements
- **Form Labels**: Visible labels with proper associations

### Visual Accessibility
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Indicators**: High-contrast focus outlines
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **High Contrast**: Enhanced borders in high contrast mode

## 🔍 SEO Features

### Meta Tags
- **Title Tags**: Optimized for each page
- **Meta Descriptions**: Compelling descriptions for search results
- **Open Graph**: Rich social media previews
- **Twitter Cards**: Optimized Twitter sharing

### Technical SEO
- **Structured Data**: JSON-LD markup for rich snippets
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Crawler guidance
- **Performance**: Optimized loading and Core Web Vitals

### Content Optimization
- **Heading Structure**: Proper H1-H6 hierarchy
- **Alt Text**: Descriptive image alt attributes
- **Internal Linking**: Strategic internal link structure
- **URL Structure**: Clean, descriptive URLs

## 🛠️ Development Guidelines

### Accessibility Standards
- Follow WCAG 2.1 AA guidelines
- Test with keyboard navigation
- Use screen reader testing tools
- Validate ARIA attributes
- Check color contrast ratios

### Code Quality
- Use ESLint and Prettier for code formatting
- Follow React best practices
- Write meaningful component documentation
- Test across different browsers and devices

### Performance
- Optimize images and assets
- Minimize bundle size
- Use lazy loading where appropriate
- Monitor Core Web Vitals

## 📱 PWA Features

- **Installable**: Add to home screen on mobile devices
- **Offline Support**: Service worker for offline functionality
- **App-like Experience**: Standalone mode without browser UI
- **Fast Loading**: Optimized for mobile networks

## 🧪 Testing

### Accessibility Testing
```bash
# Run accessibility audit
npm run test:a11y

# Test with screen reader
# Use tools like NVDA, JAWS, or VoiceOver
```

### Performance Testing
```bash
# Build and analyze bundle
npm run build
npm run analyze

# Test Core Web Vitals
# Use Lighthouse or PageSpeed Insights
```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: All metrics in the "Good" range
- **Bundle Size**: Optimized with code splitting
- **Load Time**: < 2 seconds on 3G networks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with accessibility in mind
4. Test with keyboard navigation and screen readers
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: bilalhass977@gmail.com
- **Location**: Toronto, Ontario, Canada
- **Portfolio**: [triggertechlabs.com](https://triggertechlabs.com)

---

**Built with ❤️ and accessibility in mind**
