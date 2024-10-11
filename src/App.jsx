import { useState } from 'react'
import Login from './pages/Login'
import { Routes, Route, Navigate, Outlet, useLocation, replace } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Users from './pages/Users'
import Trash from './pages/Trash'
import TaskDetails from './pages/TaskDetails'
import {Toaster} from 'sonner'

function Layout() {
  const user = ''
  const loaction = useLocation();


  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'></div>
      {/* side bar */}


      <div className='flex-1 overflow-y-autoauto'>
        {/* navbar */}

        <div className='p-4 2x1:px-10'>
          <Outlet/>
        </div>
      </div>
    </div>

  ) : (
    <Navigate to='/login' state={{ from: loaction }} replace />
  );


}

function App() {


  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>

        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/Dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status' element={<Tasks />} />
          <Route path='/todo/:status' element={<Tasks />} />
          <Route path='/team' element={<Users />} />
          <Route path='/trashed' element={<Trash />} />
          <Route path='/task/:id' element={<TaskDetails />} />



        </Route>

        <Route path='/login' element={<Login />} />
      </Routes>

      <Toaster richColors />


    </main>


  )
}

export default App
