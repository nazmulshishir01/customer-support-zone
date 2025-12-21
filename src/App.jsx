import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TicketCard from './components/TicketCard'
import TaskStatus from './components/TaskStatus'
import ResolvedList from './components/ResolvedList'
import Footer from './components/Footer'
import { ticketsData as seed } from './data/tickets'
import { ToastContainer, toast } from 'react-toastify'

export default function App() {
  const [tickets, setTickets] = useState(seed)            
  const [inProgress, setInProgress] = useState([])        
  const [resolved, setResolved] = useState([])            

  const inProgressCount = inProgress.length
  const resolvedCount = resolved.length

  const addToProgress = (ticket) => {
    if (inProgress.find(t => t.id === ticket.id)) {
      toast.info('Already in progress')
      return
    }
    setTickets(prev => prev.filter(t => t.id !== ticket.id))
    setInProgress(prev => [{ ...ticket, status: 'in-progress' }, ...prev])
    toast.success('Added to In-Progress')
  }

  const completeTicket = (id) => {
    const t = inProgress.find(x => x.id === id)
    if (!t) return
    setInProgress(prev => prev.filter(x => x.id !== id))
    setResolved(prev => [{ ...t, status: 'resolved' }, ...prev])
    toast.success('Completed!')
  }

  const gridCols = useMemo(() => 'grid grid-cols-1 md:grid-cols-2 gap-4', [])

  return (
    <div data-theme="csTheme" className="min-h-screen bg-[#f5f5f5]">
      <ToastContainer position="top-right" autoClose={1600} hideProgressBar />
      
      
      
      <Navbar />

      <main className="bg-[#f5f5f5] py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">


          
            <section className="lg:col-span-2">
              <h3 className="font-semibold text-[24px] text-[#34485A] mb-4">Customer Tickets</h3>

              {tickets.length === 0 ? (
                <div className="alert alert-info">All tickets are in progress or resolved.</div>
              ) : (
                <div className={gridCols}>
                  {tickets.map(t => (
                    <TicketCard key={t.id} ticket={t} onAddToProgress={addToProgress} />
                  ))}
                </div>
              )}
            </section>

            
            <aside className="space-y-8">
              <TaskStatus inProgress={inProgress} onComplete={completeTicket} />
              <ResolvedList resolved={resolved} />
            </aside>
          </div>
        </div>
      </main>
      
      

      <Footer />
    </div>
  )
}
