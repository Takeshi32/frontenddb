import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import SetNewPassword from './pages/SetNewPassword';
import UserProfile from './pages/UserProfile';
import MakeReservation from './pages/MakeReservation';
import UserReservations from './pages/UserReservations';
import AddTable from './pages/AddTable';
import TableList from './pages/TableList';
import EditTable from './pages/EditTable';
import AssignTable from './pages/AssignTable';
import AdminReservations from './pages/AdminReservations';
import EditReservation from './pages/EditReservation';
import DailyReport from './pages/DailyReport';
import WeeklyReport from './pages/WeeklyReport';
import MonthlyReport from './pages/MonthlyReport';
import ManageRoles from './pages/ManageRoles';
import ManagePermissions from './pages/ManagePermissions';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/set-new-password/:token" element={<SetNewPassword />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/make-reservation" element={<MakeReservation />} />
      <Route path="/reservations" element={<UserReservations />} />
      <Route path="/add-table" element={<AddTable roles={[1, 2]} />} />
      <Route path="/tables" element={<TableList roles={[1, 2]} />} />
      <Route path="/edit-table/:id" element={<EditTable roles={[1, 2]} />} />
      <Route path="/assign-table" element={<AssignTable roles={[1, 2]} />} />
      <Route path="/admin-reservations" element={<AdminReservations roles={[1, 2]} />} />
      <Route path="/edit-reservation/:id" element={<EditReservation roles={[1, 2]} />} />
      <Route path="/reports/daily" element={<DailyReport roles={[1, 2]} />} />
      <Route path="/reports/weekly" element={<WeeklyReport roles={[1, 2]} />} />
      <Route path="/reports/monthly" element={<MonthlyReport roles={[1, 2]} />} />
      <Route path="/manage-roles" element={<ManageRoles roles={[1]} />} />
      <Route path="/manage-permissions" element={<ManagePermissions roles={[1]} />} />
    </Route>
  </Routes>
);

export default AppRoutes;
