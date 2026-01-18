# This Wasn't in the PPT

A Jekyll-based blog for Machine Learning, Data Science and Artificial Intelligence articles, designed to be deployed on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/downloads/) (version 2.7 or higher)
- [Bundler](https://bundler.io/) (`gem install bundler`)
- [Git](https://git-scm.com/)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jai-Keshav-Sharma/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run locally:**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser:** http://localhost:4000

## 📁 Project Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
│   ├── default.html     # Base layout
│   ├── post.html        # Blog post layout
│   └── category.html    # Category page layout
├── _includes/           # Reusable components
│   ├── header.html      # Navigation header
│   ├── footer.html      # Site footer
│   ├── comments.html    # Giscus comments
│   └── post-card.html   # Post card component
├── _posts/              # Blog posts (Markdown)
├── assets/
│   ├── css/main.css     # Main stylesheet
│   └── images/          # Images and avatars
├── index.html           # Home page
├── about.html           # About page
├── contact.html         # Contact page
├── machine-learning.html
├── artificial-intelligence.html
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## ✍️ Writing New Posts

1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-title-slug.md`

2. Add front matter at the top:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2026-01-20
   categories: [machine-learning]  # or [artificial-intelligence]
   tags: [tag1, tag2]
   author: "Jai Keshav Sharma"
   image: /assets/images/posts/your-image.svg
   description: "Brief description for SEO"
   ---
   ```

3. Write your content in Markdown below the front matter.

### Categories

- `machine-learning` - Posts about ML algorithms, models, training
- `artificial-intelligence` - Posts about broader AI topics, ethics, applications

### Supported Features

- **Math equations:** Use `$inline$` or `$$block$$` LaTeX syntax
- **Code highlighting:** Use fenced code blocks with language
- **Images:** Add to `assets/images/posts/`

## 💬 Setting Up Giscus Comments

Giscus uses GitHub Discussions for comments. To enable:

1. **Enable GitHub Discussions:**
   - Go to your repository on GitHub
   - Settings → Features → Check "Discussions"

2. **Configure Giscus:**
   - Visit [https://giscus.app](https://giscus.app)
   - Enter your repository name
   - Choose category (recommend "Announcements")
   - Copy the generated configuration values

3. **Update `_config.yml`:**
   ```yaml
   giscus:
     repo: "Jai-Keshav-Sharma/your-repo-name"
     repo_id: "YOUR_REPO_ID"          # From giscus.app
     category: "Announcements"
     category_id: "YOUR_CATEGORY_ID"  # From giscus.app
     mapping: "pathname"
     reactions_enabled: "1"
     emit_metadata: "0"
     theme: "light"
     lang: "en"
   ```

4. **Commit and push** the changes.

## 🌐 Deploying to GitHub Pages

### Option 1: User/Organization Site

1. Create a repository named `username.github.io`
2. Push this code to the `main` branch
3. Site will be available at `https://username.github.io`

### Option 2: Project Site

1. Create any repository name
2. Push this code
3. Go to Settings → Pages
4. Set source to "Deploy from a branch" → `main` → `/ (root)`
5. Update `baseurl` in `_config.yml` to your repo name:
   ```yaml
   baseurl: "/your-repo-name"
   ```
6. Site will be at `https://username.github.io/your-repo-name`

## 🎨 Customization

### Colors

Edit CSS variables in `assets/css/main.css`:

```css
:root {
    --color-bg: #f5f5f5;
    --color-card: #ffffff;
    --color-text: #333333;
    --color-link: #4a7c9b;
    --color-navbar: #2c2c2c;
    /* ... */
}
```

### Fonts

Change Google Fonts imports in `_layouts/default.html` and update:

```css
:root {
    --font-heading: 'Lora', Georgia, serif;
    --font-body: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
}
```

### Background Image

Add your own background to `assets/images/background.jpg` or remove the background-image line in CSS for a solid color.

## 📧 Author Information

Update `_config.yml`:

```yaml
author:
  name: "Your Name"
  email: "your@email.com"
  avatar: "/assets/images/avatar-placeholder.svg"
  bio: "Your bio here"
  linkedin: "https://linkedin.com/in/your-profile"
  github: "https://github.com/your-username"
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using [Jekyll](https://jekyllrb.com/) | Hosted on [GitHub Pages](https://pages.github.com/)
