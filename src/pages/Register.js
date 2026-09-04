// src/pages/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/services';
import { ROLES } from '../utils/authUtils';
import '../styles/auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    gender: 'FEMALE',
    role: ROLES.CUSTOMER,
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setErr('');

    if (form.password !== form.confirmPassword) {
      setErr('Passwords do not match.');
      return;
    }

    try {
      const res = await authService.register({
        gender: form.gender,
        role: form.role,
        email: form.email,
        password: form.password,
      });

      setMsg(res);
      setTimeout(() => navigate('/login'), 900);
    } catch (error) {
      setErr(
        error?.response?.data?.message ||
          error?.response?.data ||
          error.message ||
          'Registration failed.'
      );
    }
  };

  return (
    <div className="nf-auth-page">
      <div className="nf-auth-card">
        <h1 className="nf-auth-title">Register</h1>
        <p className="nf-auth-subtitle">
          Create your account with a secure role selection.
        </p>

        {err && (
          <div
            className={`nf-alert ${
              err.toLowerCase().includes('email already')
                ? 'nf-alert-info'
                : 'nf-alert-error'
            }`}
          >
            {err}
          </div>
        )}

        {msg && <div className="nf-alert nf-alert-success">{msg}</div>}

        <form onSubmit={handleSubmit} className="nf-auth-form">
          <div className="nf-form-group">
            <label>Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="FEMALE">Female</option>
              <option value="MALE">Male</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <div className="nf-form-group">
            <label>Role</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option value={ROLES.ADMIN}>Admin</option>
              <option value={ROLES.FLEET_MANAGER}>Fleet Manager</option>
              <option value={ROLES.DRIVER}>Driver</option>
              <option value={ROLES.CUSTOMER}>Customer</option>
            </select>
          </div>

          <div className="nf-form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="nf-form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="nf-form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              required
            />
          </div>

          <button className="nf-btn-primary" type="submit">
            Create Account
          </button>
        </form>

        <p className="nf-auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
