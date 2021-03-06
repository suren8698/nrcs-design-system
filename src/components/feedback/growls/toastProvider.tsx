import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";

import ToastContext from "./toastContext";
import Growl from "./Growl";

// Create a random ID
function generateUEID() {
  let first: number | string = (Math.random() * 46656) | 0;
  let second: number | string = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);

  return first + second;
}

interface IToast {
  id: string;
  color: string;
  content: string;
}

interface IToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: IToastProviderProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);
  const add = (color: string, content: string) => {
    const id = generateUEID();
    setToasts([...toasts, { id, color, content }]);
  };
  const remove = (id: string) => setToasts(toasts.filter((t) => t.id !== id));

  const providerValue = useMemo(() => {
    return { add, remove };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts]);

  return (
    <ToastContext.Provider value={providerValue}>
      {createPortal(
        <div className="growl growl-top-right">
          {toasts.map((t) => (
            <Growl key={t.id} color={t.color} remove={() => remove(t.id)}>
              {t.content}
            </Growl>
          ))}
        </div>,
        document.body
      )}
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider };
