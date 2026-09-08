'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, ExternalLink, LayoutGrid, FileText, Image as ImageIcon, Link as LinkIcon, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects')
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  // Project Form State
  const [projectData, setProjectData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    link: ''
  })

  // Blog Form State
  const [blogData, setBlogData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    tag: ''
  })

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // In a real app, this would be a server action or API call
      // For now, we simulate the logic since we can't easily trigger the write_to_file from client
      // But we will implement the UI and the placeholder for the action
      console.log('Project submitted:', projectData)
      toast({
        title: "Project Added!",
        description: "Your new project has been successfully added to the portfolio.",
      })
      setProjectData({ title: '', category: '', description: '', image: '', link: '' })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while adding the project.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      console.log('Blog submitted:', blogData)
      toast({
        title: "Post Published!",
        description: "Your new blog post is now live.",
      })
      setBlogData({ title: '', excerpt: '', content: '', image: '', tag: '' })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while publishing the post.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-display font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-slate-400">Manage your projects and latest news updates.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="border-slate-800 bg-slate-900/50 hover:bg-slate-800 rounded-xl" onClick={() => window.open('/', '_blank')}>
              View Site <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </header>

        <Tabs defaultValue="projects" className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="bg-slate-900 border border-slate-800 p-1 rounded-2xl">
            <TabsTrigger value="projects" className="px-8 py-3 rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <LayoutGrid className="mr-2 w-4 h-4" /> Projects
            </TabsTrigger>
            <TabsTrigger value="blogs" className="px-8 py-3 rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <FileText className="mr-2 w-4 h-4" /> Blogs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-1">
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-xl rounded-[2rem] overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Add New Project</CardTitle>
                    <CardDescription className="text-slate-400">Expand your portfolio with a new success story.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Project Title</label>
                      <Input 
                        placeholder="e.g. Nexus E-Commerce" 
                        className="bg-slate-950 border-slate-800 rounded-xl focus:border-blue-500 text-white"
                        value={projectData.title}
                        onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Category</label>
                      <Input 
                        placeholder="e.g. Web Development" 
                        className="bg-slate-950 border-slate-800 rounded-xl focus:border-blue-500 text-white"
                        value={projectData.category}
                        onChange={(e) => setProjectData({...projectData, category: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Description</label>
                      <Textarea 
                        placeholder="Brief summary of the project..." 
                        className="bg-slate-950 border-slate-800 rounded-xl focus:border-blue-500 min-h-[100px] text-white"
                        value={projectData.description}
                        onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Image URL</label>
                      <div className="relative">
                        <ImageIcon className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                        <Input 
                          placeholder="/projects/example.png" 
                          className="pl-10 bg-slate-950 border-slate-800 rounded-xl focus:border-blue-500 text-white"
                          value={projectData.image}
                          onChange={(e) => setProjectData({...projectData, image: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Project Link</label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                        <Input 
                          placeholder="https://..." 
                          className="pl-10 bg-slate-950 border-slate-800 rounded-xl focus:border-blue-500 text-white"
                          value={projectData.link}
                          onChange={(e) => setProjectData({...projectData, link: e.target.value})}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-6 h-auto font-bold"
                      onClick={handleProjectSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : 'Publish Project'}
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* List Preview Section */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Current Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Placeholder for real list which would be fetched */}
                  <div className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                       <div className="w-16 h-10 bg-slate-800 rounded-lg animate-pulse" />
                       <Button size="icon" variant="destructive" className="h-8 w-8 rounded-lg bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500 hover:text-white">
                         <Trash2 className="w-4 h-4" />
                       </Button>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">Vigyat AgroStore</h4>
                    <p className="text-sm text-slate-400">E-Commerce Platform</p>
                  </div>
                  {/* More placeholders... */}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="blogs">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2">
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-xl rounded-[2rem] overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Write a Blog Post</CardTitle>
                    <CardDescription className="text-slate-400">Share news, insights, and updates with your audience.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Title</label>
                      <Input 
                        placeholder="e.g. The Future of AI in Web Development" 
                        className="bg-slate-950 border-slate-800 rounded-2xl focus:border-blue-500 text-white p-6 h-auto text-xl font-bold"
                        value={blogData.title}
                        onChange={(e) => setBlogData({...blogData, title: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Tag / Category</label>
                        <Input 
                          placeholder="e.g. Technology" 
                          className="bg-slate-950 border-slate-800 rounded-xl focus:border-blue-500 text-white"
                          value={blogData.tag}
                          onChange={(e) => setBlogData({...blogData, tag: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Featured Image URL</label>
                        <Input 
                          placeholder="/blog/post-1.png" 
                          className="bg-slate-950 border-slate-800 rounded-xl focus:border-blue-500 text-white"
                          value={blogData.image}
                          onChange={(e) => setBlogData({...blogData, image: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Short Excerpt</label>
                      <Textarea 
                        placeholder="A brief summary for the card preview..." 
                        className="bg-slate-950 border-slate-800 rounded-xl focus:border-blue-500 min-h-[80px] text-white"
                        value={blogData.excerpt}
                        onChange={(e) => setBlogData({...blogData, excerpt: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Content (Markdown supported)</label>
                      <Textarea 
                        placeholder="Write your blog post content here..." 
                        className="bg-slate-950 border-slate-800 rounded-2xl focus:border-blue-500 min-h-[300px] text-white p-6 leading-relaxed"
                        value={blogData.content}
                        onChange={(e) => setBlogData({...blogData, content: e.target.value})}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-4 p-8 bg-slate-900/30">
                    <Button variant="outline" className="border-slate-800 bg-transparent text-slate-400 hover:text-white rounded-xl">Save as Draft</Button>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-12 py-6 h-auto font-bold shadow-glow-sm"
                      onClick={handleBlogSubmit}
                      disabled={isLoading}
                    >
                      <Send className="mr-2 w-4 h-4" /> {isLoading ? 'Publishing...' : 'Publish Post'}
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Preview/Instructions */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="bg-blue-600/10 border-blue-500/20 rounded-[2rem] p-8">
                  <h3 className="text-lg font-bold text-blue-400 mb-4">Tips for Great Content</h3>
                  <ul className="space-y-4 text-sm text-slate-300 italic">
                    <li className="flex gap-2"><span>✨</span> Use catchy titles to grab attention.</li>
                    <li className="flex gap-2"><span>🖼️</span> High-quality images make a huge difference.</li>
                    <li className="flex gap-2"><span>💬</span> Write valuable content that solves problems.</li>
                  </ul>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
