import React, { createContext, useState, useMemo, useCallback } from 'react';

import { Modal, ContactForm } from "@/components/common";

const ContactFormContext =  createContext();

function ContactFormProvider({ children }) {
	const [toggleModal, setToggleModal] = useState(false);

  const toggleContactForm = useCallback((status) => {
    if (typeof status === 'boolean') {
      setToggleModal(status);
    } else {
      setToggleModal((prev) => !prev);
    }
  }, []);

  const contextValue = useMemo(() => ({ toggleContactForm }), [toggleContactForm]);

  return (
    <ContactFormContext.Provider value={contextValue}>
      {children}

			<Modal
				open={toggleModal}
				onClose={() => toggleContactForm(false)}
			>
				<ContactForm isFormInModal />
			</Modal>
    </ContactFormContext.Provider>
  );
}

export { ContactFormContext, ContactFormProvider };
