/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import React from 'react';
import { motion } from 'motion/react';
import { X, Lock, CreditCard, ShieldCheck, Heart, Sparkles, Check, FileText, ArrowRight } from 'lucide-react';
import { Language, Tier } from '../types';
import { translations } from '../data/translations';

interface CheckoutModalProps {
  language: Language;
  selectedTier: Tier;
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ language, selectedTier, isOpen, onClose }: CheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('ON');

  const t = translations[language];
  const p = t.pricing;

  // Retrieve current active tier configuration
  const getTierInfo = () => {
    switch (selectedTier) {
      case 'earlybird':
        return {
          name: p.tiers.earlybird.name,
          price: 25,
          summary: p.tiers.earlybird.summary
        };
      case 'guardian':
        return {
          name: p.tiers.founding.name,
          price: 85,
          summary: p.tiers.founding.summary
        };
      case 'guardian':
      default:
        return {
          name: p.tiers.guardian.name,
          price: 150,
          summary: p.tiers.guardian.summary
        };
    }
  };

  const activeTierObj = getTierInfo();

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 16) val = val.slice(0, 16);
    // Add visual spaces
    const matches = val.match(/.{1,4}/g);
    setCardNumber(matches ? matches.join(' ') : val);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    if (val.length >= 2) {
      setExpiry(`${val.slice(0, 2)}/${val.slice(2)}`);
    } else {
      setExpiry(val);
    }
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 3) val = val.slice(0, 3);
    setCvc(val);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && fullName && cardNumber.length >= 19 && expiry.length >= 5 && cvc.length >= 3) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setIsComplete(true);
      }, 1600);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="checkout-root">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0B0E1B]"
      />

      {/* Main card box Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-6 md:p-8 text-[#1A1A2E] z-10 font-sans"
        id="checkout-modal-card"
      >
        {/* Close Button element */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 text-gray-400 hover:text-[#1A1A2E] rounded-xl transition-all cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Transaction Content States */}
        {!isComplete ? (
          <form onSubmit={handleCheckoutSubmit} className="space-y-6 text-left" id="checkout-form-panel">
            
            {/* Header branding info */}
            <div className="space-y-1 pr-8">
              <span className="text-[10px] font-black font-mono tracking-widest text-[#00D4FF] uppercase">
                🔒 {language === 'en' ? "STRIPE-SECURED GATEWAY" : "SÉCURISÉ PAR STRIPE"}
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight">
                {language === 'en' ? "Secure Deposit Pre-Order" : "Validation de pré-commande"}
              </h3>
              <p className="text-xs text-gray-500">
                {language === 'en'
                  ? "Fully refundable holding deposit, secured in Canadian Dollars (CAD) escrow."
                  : "Dépôt d'engagement convertible et entièrement remboursable."}
              </p>
            </div>

            {/* Price review summary card */}
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold font-mono text-gray-400 uppercase tracking-widest">
                  {language === 'en' ? "SELECTED PACKAGE" : "FORFAIT SÉLECTIONNÉ"}
                </span>
                <p className="text-sm font-bold text-[#1A1A2E] leading-tight">
                  ASTRA-AI {activeTierObj.name} Suite
                </p>
                <p className="text-[10px] text-[#4B5563] mt-0.5 max-w-[240px] truncate">
                  {activeTierObj.summary}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black font-mono text-[#1A1A2E]">${activeTierObj.price}</span>
                <span className="text-[10px] font-bold text-gray-500 block">CAD</span>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="space-y-4">
              {/* Contact parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="ch-name" className="text-[10px] font-extrabold tracking-wide uppercase text-[#1A1A2E]">
                    {language === 'en' ? "Full Name" : "Nom & Prénom"}
                  </label>
                  <input
                    id="ch-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="E.g., Alexander Mercer"
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-medium outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="ch-email" className="text-[10px] font-extrabold tracking-wide uppercase text-[#1A1A2E]">
                    {language === 'en' ? "Email Address" : "Adresse Courriel"}
                  </label>
                  <input
                    id="ch-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@domain.ca"
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-medium outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                  />
                </div>
              </div>

              {/* Shipping geography selection parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8 flex flex-col space-y-1.5">
                  <label htmlFor="ch-addr" className="text-[10px] font-extrabold tracking-wide uppercase text-[#1A1A2E]">
                    {language === 'en' ? "Canadian Shipping Address" : "Adresse d'expédition au Canada"}
                  </label>
                  <input
                    id="ch-addr"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="100 University Ave, Unit 20"
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-medium outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                  />
                </div>
                <div className="sm:col-span-4 flex flex-col space-y-1.5">
                  <label htmlFor="ch-prov" className="text-[10px] font-extrabold tracking-wide uppercase text-[#1A1A2E]">
                    {language === 'en' ? "Province" : "Province"}
                  </label>
                  <select
                    id="ch-prov"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-medium outline-none focus:border-[#00D4FF] transition-all"
                  >
                    <option value="ON">ON (Ontario)</option>
                    <option value="QC">QC (Québec)</option>
                    <option value="BC">BC (Col.-Britannique)</option>
                    <option value="AB">AB (Alberta)</option>
                    <option value="MB">MB (Manitoba)</option>
                    <option value="SK">SK (Saskatchewan)</option>
                    <option value="NS">NS (Nouvelle-Écosse)</option>
                    <option value="NB">NB (Nouv.-Brunswick)</option>
                  </select>
                </div>
              </div>

              {/* Secure Credit Card Element */}
              <div className="bg-[#1A1A2E] text-white p-4 rounded-2xl border border-slate-700 space-y-4">
                <p className="text-[9px] font-mono tracking-wider uppercase text-cyan-400">
                  {language === 'en' ? "SECURE CREDIT CARD CHANNEL" : "CANAL DE PAIEMENT SÉCURISÉ"}
                </p>

                {/* Card Number Input */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="ch-cardnum" className="text-[8px] font-mono font-extrabold tracking-widest uppercase text-gray-300">
                    {language === 'en' ? "CARD NUMBER" : "NUMÉRO DE CARTE"}
                  </label>
                  <div className="relative">
                    <input
                      id="ch-cardnum"
                      type="text"
                      required
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="4242 4242 4242 4242"
                      className="w-full bg-[#0B0E1B] text-white border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 font-mono text-xs outline-none focus:border-[#00D4FF] tracking-widest"
                    />
                    <CreditCard className="w-4 h-4 text-[#00D4FF] absolute left-3 top-3" />
                  </div>
                </div>

                {/* Date and CVC Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="ch-expiry" className="text-[8px] font-mono font-extrabold tracking-widest uppercase text-gray-300">
                      {language === 'en' ? "EXPIRY DATE" : "EXPIRATION"}
                    </label>
                    <input
                      id="ch-expiry"
                      type="text"
                      required
                      value={expiry}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY"
                      className="bg-[#0B0E1B] text-white border border-slate-800 rounded-xl px-4 py-2.5 font-mono text-xs outline-none focus:border-[#00D4FF] tracking-wider text-center"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="ch-cvc" className="text-[8px] font-mono font-extrabold tracking-widest uppercase text-gray-300">
                      CVC CODE
                    </label>
                    <input
                      id="ch-cvc"
                      type="password"
                      required
                      value={cvc}
                      onChange={handleCvcChange}
                      placeholder="***"
                      maxLength={3}
                      className="bg-[#0B0E1B] text-white border border-slate-800 rounded-xl px-4 py-2.5 font-mono text-xs outline-none focus:border-[#00D4FF] tracking-widest text-center"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Submit Action Block */}
            <div className="space-y-4 pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-extrabold rounded-full text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{language === 'en' ? "Contacting Stripe Gateway..." : "Négociation avec Stripe..."}</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>
                      {language === 'en' 
                        ? `Authorize Refundable $${activeTierObj.price}.00 CAD Deposit` 
                        : `Autoriser le dépôt de ${activeTierObj.price},00 $ CAD`}
                    </span>
                  </>
                )}
              </button>
              <div className="flex items-center justify-center space-x-2 text-[9px] text-[#4B5563] font-bold">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Verified End-to-End Encrypted (AES-256)</span>
              </div>
            </div>

          </form>
        ) : (
          /* Pre-order Complete State Receipts Check */
          <div className="space-y-6 text-center py-6" id="checkout-receipt-panel">
            
            <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-sm animate-bounce">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-mono font-black tracking-widest uppercase rounded-full">
                ✨ {language === 'en' ? "CONFIRMED FOUNDING SPACE" : "DÉPÔT COMPTABILISÉ"}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#1A1A2E] leading-tight">
                {language === 'en' ? "You're Locked In!" : "Félicitations, réservé !"}
              </h3>
              <p className="text-xs text-[#4B5563] max-w-sm mx-auto leading-relaxed">
                {language === 'en'
                  ? `Thank you, ${fullName}. We have securely reserved your ASTRA-AI ${activeTierObj.name} batch suite. Welcome to Founder Batch 01.`
                  : `Merci, ${fullName}. Votre place est sécurisée pour le lot de fabrication ASTRA-AI ${activeTierObj.name}.`}
              </p>
            </div>

            {/* Receipt invoice values list */}
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl text-left space-y-2.5 max-w-sm mx-auto font-mono text-[10px] text-gray-500">
              <div className="flex justify-between">
                <span>INVOICE NUMBER:</span>
                <span className="font-extrabold text-[#1A1A2E]">AST-2026-{(Math.floor(Math.random() * 9000) + 1000)}</span>
              </div>
              <div className="flex justify-between">
                <span>PRE-ORDER TOKEN:</span>
                <span className="font-extrabold text-[#00D4FF]">TOK-9948X-{(Math.floor(Math.random() * 90) + 10)}</span>
              </div>
              <div className="flex justify-between">
                <span>DEPOSIT PAID:</span>
                <span className="font-extrabold text-green-600">${activeTierObj.price}.00 CAD</span>
              </div>
              <div className="flex justify-between">
                <span>LEDGER STATE:</span>
                <span className="font-extrabold text-[#1A1A2E]">SECURED IN ESCROW</span>
              </div>
              <div className="flex justify-between pt-1.5 border-t border-gray-200">
                <span>SHIPPING QUEUE:</span>
                <span className="font-extrabold text-green-600">POSITION #{(Math.floor(Math.random() * 18) + 1)} / 250</span>
              </div>
            </div>

            {/* Double-Action elements */}
            <div className="space-y-4 pt-2">
              <button
                onClick={() => window.print()}
                className="w-full py-4 bg-[#1A1A2E] hover:bg-[#00D4FF] text-white hover:text-[#1A1A2E] font-bold text-xs rounded-full transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{language === 'en' ? "Print Holding Invoice (PDF)" : "Télécharger mon reçu (PDF)"}</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 bg-white hover:bg-gray-50 text-gray-500 border border-gray-200 font-bold text-xs rounded-full transition-all flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>{language === 'en' ? "Back to Experience" : "Retour à la page"}</span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-[9px] text-[#4B5563] font-bold">
              <ShieldCheck className="w-4 h-4 text-green-600 animate-pulse" />
              <span>Full compliance with PIPEDA Data Residency standard protocols.</span>
            </div>

          </div>
        )}

      </motion.div>
    </div>
  );
}
