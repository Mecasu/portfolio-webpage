import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// tip: "success", "error", "info", "warn" olabilir
export const toastFunc = (type, lang, darkMode) => {
  const messages = {
    tr: {
      success: "Dil başarıyla Türkçe olarak değiştirildi.",
      error: "Bir hata oluştu.",
      info: "Bilgilendirme mesajı.",
      warn: "Uyarı mesajı.",
    },
    en: {
      success: "Language successfully changed to English.",
      error: "An error occurred.",
      info: "Informational message.",
      warn: "Warning message.",
    },
  };

  const message = messages[lang]?.[type] || "Mesaj bulunamadı";

  toast[type](message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: darkMode ? "dark" : "light",
  });
};
