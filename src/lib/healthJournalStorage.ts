// Local storage management for health journal
import { JournalEntry } from './healthJournalTypes';

const STORAGE_KEY = 'bioguard_health_journal';

export const saveJournalEntry = (entry: JournalEntry): void => {
  const entries = getJournalEntries();
  const existingIndex = entries.findIndex(e => e.id === entry.id);
  
  if (existingIndex >= 0) {
    entries[existingIndex] = entry;
  } else {
    entries.push(entry);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

export const getJournalEntries = (): JournalEntry[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const getJournalEntry = (id: string): JournalEntry | null => {
  const entries = getJournalEntries();
  return entries.find(e => e.id === id) || null;
};

export const getJournalEntriesByDateRange = (startDate: string, endDate: string): JournalEntry[] => {
  const entries = getJournalEntries();
  return entries.filter(e => e.date >= startDate && e.date <= endDate)
    .sort((a, b) => b.date.localeCompare(a.date));
};

export const deleteJournalEntry = (id: string): void => {
  const entries = getJournalEntries().filter(e => e.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

export const getRecentEntries = (days: number = 30): JournalEntry[] => {
  const entries = getJournalEntries();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  const cutoffString = cutoffDate.toISOString().split('T')[0];
  
  return entries.filter(e => e.date >= cutoffString)
    .sort((a, b) => b.date.localeCompare(a.date));
};

// Storage utilities for attachments
export const getStorageSize = (): number => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return 0;
  // Return size in MB
  return new Blob([data]).size / (1024 * 1024);
};

export const getTotalAttachmentCount = (): number => {
  const entries = getJournalEntries();
  return entries.reduce((total, entry) => {
    return total + (entry.attachments?.length || 0);
  }, 0);
};

export const clearOldAttachments = (daysToKeep: number = 90): void => {
  const entries = getJournalEntries();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
  const cutoffString = cutoffDate.toISOString().split('T')[0];
  
  const updatedEntries = entries.map(entry => {
    if (entry.date < cutoffString && entry.attachments) {
      // Remove attachments from old entries to save space
      return { ...entry, attachments: undefined };
    }
    return entry;
  });
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
};
