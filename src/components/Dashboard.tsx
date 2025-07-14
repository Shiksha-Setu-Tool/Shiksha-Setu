import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';

interface Curriculum {
  id: string;
  title: string;
  subject: string;
  grade: string;
  description: string;
  createdAt: Date;
}

interface DashboardProps {
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  const { currentUser } = useAuth();
  const [curriculums, setCurriculums] = useState<Curriculum[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCurriculum, setNewCurriculum] = useState({
    title: '',
    subject: '',
    grade: '',
    description: ''
  });

  useEffect(() => {
    fetchCurriculums();
  }, [currentUser]);

  async function fetchCurriculums() {
    if (!currentUser) return;
    
    try {
      const q = query(collection(db, 'curriculums'), where('userId', '==', currentUser.uid));
      const querySnapshot = await getDocs(q);
      const curriculumData: Curriculum[] = [];
      querySnapshot.forEach((doc) => {
        curriculumData.push({ id: doc.id, ...doc.data() } as Curriculum);
      });
      setCurriculums(curriculumData);
    } catch (error) {
      console.error('Error fetching curriculums:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateCurriculum(e: React.FormEvent) {
    e.preventDefault();
    if (!currentUser) return;

    try {
      await addDoc(collection(db, 'curriculums'), {
        ...newCurriculum,
        userId: currentUser.uid,
        createdAt: new Date()
      });
      setNewCurriculum({ title: '', subject: '', grade: '', description: '' });
      setShowCreateForm(false);
      fetchCurriculums();
    } catch (error) {
      console.error('Error creating curriculum:', error);
    }
  }

  async function handleDeleteCurriculum(id: string) {
    try {
      await deleteDoc(doc(db, 'curriculums', id));
      fetchCurriculums();
    } catch (error) {
      console.error('Error deleting curriculum:', error);
    }
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        color: 'white'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          padding: '1rem 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onBack}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}
            >
              ←
            </button>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                Welcome, {currentUser?.email}
              </h1>
              <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>
                Manage your personalized curriculums
              </p>
            </div>
          </div>
        </div>

        {/* Create New Curriculum */}
        <div style={{ marginBottom: '3rem' }}>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="btn"
            style={{ marginBottom: '2rem' }}
          >
            {showCreateForm ? 'Cancel' : 'Create New Curriculum'}
          </button>

          {showCreateForm && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Create New Curriculum</h3>
              <form onSubmit={handleCreateCurriculum}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <input
                    type="text"
                    placeholder="Curriculum Title"
                    value={newCurriculum.title}
                    onChange={(e) => setNewCurriculum({...newCurriculum, title: e.target.value})}
                    required
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white'
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={newCurriculum.subject}
                    onChange={(e) => setNewCurriculum({...newCurriculum, subject: e.target.value})}
                    required
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white'
                    }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Grade Level"
                  value={newCurriculum.grade}
                  onChange={(e) => setNewCurriculum({...newCurriculum, grade: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    marginBottom: '1rem'
                  }}
                />
                <textarea
                  placeholder="Description"
                  value={newCurriculum.description}
                  onChange={(e) => setNewCurriculum({...newCurriculum, description: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    minHeight: '100px',
                    marginBottom: '1rem',
                    resize: 'vertical'
                  }}
                />
                <button type="submit" className="btn">
                  Create Curriculum
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Curriculums List */}
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Your Curriculums</h2>
          {curriculums.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              backdropFilter: 'blur(20px)'
            }}>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                No curriculums yet. Create your first one to get started!
              </p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {curriculums.map((curriculum) => (
                <div key={curriculum.id} className="card">
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{curriculum.title}</h3>
                  <p style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                    <strong>Subject:</strong> {curriculum.subject}
                  </p>
                  <p style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                    <strong>Grade:</strong> {curriculum.grade}
                  </p>
                  <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                    {curriculum.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <button
                      onClick={() => handleDeleteCurriculum(curriculum.id)}
                      style={{
                        padding: '8px 16px',
                        background: 'rgba(255, 107, 107, 0.2)',
                        border: '1px solid rgba(255, 107, 107, 0.3)',
                        borderRadius: '6px',
                        color: '#ff6b6b',
                        cursor: 'pointer'
                      }}
                    >
                      Delete
                    </button>
                    <button
                      style={{
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '6px',
                        color: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 