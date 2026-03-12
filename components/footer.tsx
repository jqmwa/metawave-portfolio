export function Footer() {
  return (
    <footer className="border-t border-sidebar-border bg-sidebar">
      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Metawave Studio</h3>
            <p className="text-sm text-muted-foreground">Crafting the future of digital design</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://github.com/jqmwa" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.com/invite/ZTRVCYwncs" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://github.com/jqmwa" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-sidebar-border text-center text-sm text-muted-foreground">
          © 2025 Metawave Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
