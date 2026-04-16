import { Button } from "@/components/ui/button"
import { Mail, Download, ExternalLink, Code, Palette, Smartphone, Globe, Link, User } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-svh bg-background">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Thomas Shing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about clean code, intuitive design, and innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Link className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <User className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground mb-4">
                I'm a passionate developer with 5+ years of experience building web applications 
                that solve real-world problems. My journey started with a curiosity about how 
                things work on the internet, and has evolved into a career focused on creating 
                exceptional digital experiences.
              </p>
              <p className="text-muted-foreground">
                I specialize in React, Next.js, and modern web technologies, with a keen eye for 
                design and user experience. When I'm not coding, you can find me exploring new 
                technologies, contributing to open source, or sharing knowledge with the community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-lg text-center">
                <h3 className="font-bold text-2xl mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <h3 className="font-bold text-2xl mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <h3 className="font-bold text-2xl mb-2">30+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <h3 className="font-bold text-2xl mb-2">15+</h3>
                <p className="text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-sm text-muted-foreground">Node.js, Express, PostgreSQL, MongoDB</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">Figma, Adobe XD, UI/UX, Responsive Design</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Mobile</h3>
              <p className="text-sm text-muted-foreground">React Native, Flutter, Progressive Web Apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-4">Full-stack online shopping platform with payment integration and admin dashboard.</p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-muted px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Link className="w-3 h-3" />
                    Code
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Task Management App</h3>
                <p className="text-muted-foreground mb-4">Collaborative project management tool with real-time updates and team features.</p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-muted px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Socket.io</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Link className="w-3 h-3" />
                    Code
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Weather Dashboard</h3>
                <p className="text-muted-foreground mb-4">Beautiful weather application with forecasts, maps, and location-based services.</p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-muted px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">API</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Charts.js</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Link className="w-3 h-3" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to get in touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Link className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <User className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8 text-center">
        <p className="text-muted-foreground">
          © 2024 John Doe. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </div>
  )
}
