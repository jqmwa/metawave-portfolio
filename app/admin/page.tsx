'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Pencil, Trash2, Plus, LogOut } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  sort_order: number;
  created_at: string;
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    sort_order: 0,
  });

  // Delete confirmation state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

  // Check auth status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  // Load projects when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadProjects();
    }
  }, [isAuthenticated]);

  async function checkAuth() {
    try {
      const res = await fetch('/api/projects');
      if (res.ok) {
        // Try to make an authenticated request to verify session
        const testRes = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: '' }),
        });
        // 400 means authenticated but bad request, 401 means not authenticated
        setIsAuthenticated(testRes.status !== 401);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  }

  async function loadProjects() {
    try {
      const res = await fetch('/api/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Failed to load projects:', error);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        const data = await res.json();
        setLoginError(data.error || 'Invalid password');
      }
    } catch {
      setLoginError('Login failed');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setProjects([]);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  function openAddDialog() {
    setEditingProject(null);
    setFormData({
      title: '',
      description: '',
      image: '',
      link: '',
      sort_order: 0,
    });
    setDialogOpen(true);
  }

  function openEditDialog(project: Project) {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      link: project.link,
      sort_order: project.sort_order,
    });
    setDialogOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editingProject) {
        // Update existing project
        const res = await fetch(`/api/projects/${editingProject.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          await loadProjects();
          setDialogOpen(false);
        }
      } else {
        // Create new project
        const res = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          await loadProjects();
          setDialogOpen(false);
        }
      }
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setIsLoading(false);
    }
  }

  function openDeleteDialog(project: Project) {
    setProjectToDelete(project);
    setDeleteDialogOpen(true);
  }

  async function handleDelete() {
    if (!projectToDelete) return;
    setIsLoading(true);

    try {
      const res = await fetch(`/api/projects/${projectToDelete.id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        await loadProjects();
        setDeleteDialogOpen(false);
        setProjectToDelete(null);
      }
    } catch (error) {
      console.error('Delete failed:', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#010104] flex items-center justify-center">
        <div className="text-[#eae9fc]">Loading...</div>
      </div>
    );
  }

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#010104] flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-[#0a0a0f] border-[#1a1a2f]">
          <CardHeader>
            <CardTitle className="text-[#eae9fc] text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#d4cff2]">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#0f0f1a] border-[#1a1a2f] text-[#eae9fc]"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              {loginError && (
                <p className="text-red-400 text-sm">{loginError}</p>
              )}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#21ba8c] hover:bg-[#1a9b74] text-white"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-[#010104] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-[#eae9fc]">Project Manager</h1>
          <div className="flex gap-2">
            <Button
              onClick={openAddDialog}
              className="bg-[#21ba8c] hover:bg-[#1a9b74] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-[#1a1a2f] text-[#d4cff2] hover:bg-[#1a1a2f]"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Projects Table */}
        <Card className="bg-[#0a0a0f] border-[#1a1a2f]">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-[#1a1a2f] hover:bg-transparent">
                  <TableHead className="text-[#d4cff2]">Order</TableHead>
                  <TableHead className="text-[#d4cff2]">Image</TableHead>
                  <TableHead className="text-[#d4cff2]">Title</TableHead>
                  <TableHead className="text-[#d4cff2] hidden md:table-cell">Description</TableHead>
                  <TableHead className="text-[#d4cff2] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.length === 0 ? (
                  <TableRow className="border-[#1a1a2f]">
                    <TableCell colSpan={5} className="text-center text-[#6b6b8a] py-8">
                      No projects yet. Click &quot;Add Project&quot; to create one.
                    </TableCell>
                  </TableRow>
                ) : (
                  projects.map((project) => (
                    <TableRow key={project.id} className="border-[#1a1a2f] hover:bg-[#0f0f1a]">
                      <TableCell className="text-[#eae9fc] font-mono">
                        {project.sort_order}
                      </TableCell>
                      <TableCell>
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-16 h-10 object-cover rounded"
                          />
                        ) : (
                          <div className="w-16 h-10 bg-[#1a1a2f] rounded flex items-center justify-center text-[#6b6b8a] text-xs">
                            No image
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-[#eae9fc] font-medium">
                        {project.title}
                      </TableCell>
                      <TableCell className="text-[#6b6b8a] max-w-xs truncate hidden md:table-cell">
                        {project.description || '-'}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="icon-sm"
                            variant="ghost"
                            onClick={() => openEditDialog(project)}
                            className="text-[#d4cff2] hover:text-[#21ba8c] hover:bg-[#1a1a2f]"
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon-sm"
                            variant="ghost"
                            onClick={() => openDeleteDialog(project)}
                            className="text-[#d4cff2] hover:text-red-400 hover:bg-[#1a1a2f]"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add/Edit Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="bg-[#0a0a0f] border-[#1a1a2f] text-[#eae9fc]">
            <DialogHeader>
              <DialogTitle>
                {editingProject ? 'Edit Project' : 'Add Project'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-[#d4cff2]">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-[#0f0f1a] border-[#1a1a2f] text-[#eae9fc]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-[#d4cff2]">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-[#0f0f1a] border-[#1a1a2f] text-[#eae9fc]"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image" className="text-[#d4cff2]">Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="bg-[#0f0f1a] border-[#1a1a2f] text-[#eae9fc]"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link" className="text-[#d4cff2]">Project Link</Label>
                <Input
                  id="link"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="bg-[#0f0f1a] border-[#1a1a2f] text-[#eae9fc]"
                  placeholder="https://example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sort_order" className="text-[#d4cff2]">Sort Order</Label>
                <Input
                  id="sort_order"
                  type="number"
                  value={formData.sort_order}
                  onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                  className="bg-[#0f0f1a] border-[#1a1a2f] text-[#eae9fc]"
                />
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                  className="border-[#1a1a2f] text-[#d4cff2]"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#21ba8c] hover:bg-[#1a9b74] text-white"
                >
                  {isLoading ? 'Saving...' : 'Save'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent className="bg-[#0a0a0f] border-[#1a1a2f] text-[#eae9fc]">
            <DialogHeader>
              <DialogTitle>Delete Project</DialogTitle>
            </DialogHeader>
            <p className="text-[#d4cff2]">
              Are you sure you want to delete &quot;{projectToDelete?.title}&quot;? This action cannot be undone.
            </p>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setDeleteDialogOpen(false)}
                className="border-[#1a1a2f] text-[#d4cff2]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                disabled={isLoading}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {isLoading ? 'Deleting...' : 'Delete'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
