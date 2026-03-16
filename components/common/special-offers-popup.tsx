"use client";

import { useState, useEffect, useRef, useTransition, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ToothSparkleIcon } from "@/components/common/dental-icons";

export function SpecialOffersPopup() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const btnRef = useRef<HTMLButtonElement>(null);

  const isHome = pathname === "/";

  const captureOrigin = useCallback(() => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setOrigin({
        x: rect.left + rect.width / 2 - window.innerWidth / 2,
        y: rect.top + rect.height / 2 - window.innerHeight / 2,
      });
    } else {
      setOrigin({
        x: window.innerWidth * 0.3,
        y: window.innerHeight * 0.3,
      });
    }
  }, []);

  const openModal = useCallback(() => {
    captureOrigin();
    startTransition(() => {
      setModalOpen(true);
    });
  }, [captureOrigin]);

  const handleClose = useCallback(() => {
    startTransition(() => {
      setModalOpen(false);
      setDismissed(true);
    });
    sessionStorage.setItem("offers-popup-dismissed", "1");
  }, []);

  // Auto-trigger modal on 30% scroll (once per session)
  useEffect(() => {
    if (!isHome || dismissed) return;

    if (sessionStorage.getItem("offers-popup-dismissed")) {
      setDismissed(true);
      return;
    }

    function handleScroll() {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.3) {
        setHasTriggered(true);
        // small delay so the page doesn't jank mid-scroll
        requestAnimationFrame(() => {
          startTransition(() => {
            setModalOpen(true);
          });
        });
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, dismissed]);

  // Capture origin for first auto-trigger (bottom-right default)
  useEffect(() => {
    if (modalOpen && !btnRef.current) {
      setOrigin({
        x: window.innerWidth * 0.3,
        y: window.innerHeight * 0.3,
      });
    }
  }, [modalOpen]);

  return (
    <>
      {/* Persistent FAB button — visible on all pages */}
      <AnimatePresence>
        {!modalOpen && (
          <motion.button
            ref={btnRef}
            onClick={openModal}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-20 right-4 z-40 flex h-10 sm:h-12 items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 sm:px-5 text-white shadow-lg hover:shadow-xl sm:bottom-24 sm:right-6"
          >
            <ToothSparkleIcon size={18} />
            <span className="text-sm font-semibold">Offers</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-screen modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
            />

            {/* Modal — expands from origin */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
            >
              <motion.div
                className="relative w-full max-w-md overflow-hidden rounded-3xl bg-background shadow-2xl"
                initial={{
                  scale: 0,
                  x: origin.x,
                  y: origin.y,
                  borderRadius: "50%",
                }}
                animate={{
                  scale: 1,
                  x: 0,
                  y: 0,
                  borderRadius: "1.5rem",
                }}
                exit={{
                  scale: 0,
                  x: origin.x,
                  y: origin.y,
                  borderRadius: "50%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <motion.button
                  onClick={handleClose}
                  aria-label="Close"
                  className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </motion.button>

                {/* Header */}
                <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 px-6 py-8 text-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <motion.div
                      className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                    >
                      <ToothSparkleIcon size={28} className="text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white">Special Packages</h2>
                    <p className="mt-1 text-sm text-white/70">
                      Exclusive offers for you and your family
                    </p>
                  </motion.div>
                </div>

                {/* Cards */}
                <div className="space-y-4 p-6">
                  {/* Family Card */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
                  >
                    <Link
                      href="/family-card"
                      onClick={handleClose}
                      className="group flex items-start gap-4 rounded-2xl border-2 border-amber-200/80 bg-gradient-to-br from-amber-50 to-orange-50/50 p-4 transition-all hover:border-amber-300 hover:shadow-lg dark:border-amber-500/20 dark:from-amber-500/10 dark:to-orange-500/5 dark:hover:border-amber-500/40"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-lg font-bold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                          Family Card
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          20% off treatments, free checkups & priority appointments for your whole family
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-2 shrink-0 text-amber-400 transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                  </motion.div>

                  {/* Sainik Parivar */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.35 }}
                  >
                    <Link
                      href="/family-card#sainik-parivar"
                      onClick={handleClose}
                      className="group flex items-start gap-4 rounded-2xl border-2 border-emerald-200/80 bg-gradient-to-br from-emerald-50 to-green-50/50 p-4 transition-all hover:border-emerald-300 hover:shadow-lg dark:border-emerald-500/20 dark:from-emerald-500/10 dark:to-green-500/5 dark:hover:border-emerald-500/40"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-lg font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          Sainik Parivar
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          Special discounts & free checkups for Army / Ex-Army families
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-2 shrink-0 text-emerald-400 transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
