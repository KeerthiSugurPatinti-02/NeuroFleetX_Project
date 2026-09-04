// src/utils/authUtils.js

export const ROLES = {
  ADMIN: 'ADMIN',
  FLEET_MANAGER: 'FLEET_MANAGER',
  DRIVER: 'DRIVER',
  CUSTOMER: 'CUSTOMER',
};

const USER_KEY = 'nf_user';

export function getToken() {
  return getUser()?.token || null;
}

export function isTokenExpired(token) {
  if (!token) return false;

  const parts = token.split('.');
  if (parts.length !== 3) return false;

  try {
    const normalized = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(atob(normalized));
    if (!payload.exp) return false;
    return Date.now() >= payload.exp * 1000;
  } catch {
    return false;
  }
}

export function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser() {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearUser() {
  localStorage.removeItem(USER_KEY);
}

export function clearAuth() {
  clearUser();
  localStorage.removeItem('nf_token');
}

export function isAuthenticated() {
  return !!getUser();
}

export function getUserRole() {
  return getUser()?.role || null;
}

export function hasAnyRole(roles = []) {
  const role = getUserRole();
  return role && roles.includes(role);
}
