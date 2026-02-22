using System.Diagnostics;
using BitaZarAndishPars.Models;
using Microsoft.AspNetCore.Mvc;

namespace BitaZarAndishPars.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();
        public IActionResult Product() => View();
        public IActionResult Automation() => View();
        public IActionResult AboutUs() => View();
        public IActionResult AghakabiriResume() => View();
        public IActionResult AghakabiriResumeEn() => View();

        public IActionResult DownloadAghakabiriResume()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "assets", "img", "person",
                "Mohammad Amin Aghakabiri Cv Resume.pdf");
            var bytes = System.IO.File.ReadAllBytes(path);
            return File(bytes, "application/pdf", "Mohammad Amin Aghakabiri Cv Resume.pdf");
        }

        public IActionResult ShamsResume() => View();
        public IActionResult ShamsResumeEn() => View();

        public IActionResult ProfileResume() => View();

        public IActionResult DownloadShamsResume()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "assets", "img", "person",
                "رزومه انگلیسی شمس(2).pdf");
            var bytes = System.IO.File.ReadAllBytes(path);
            return File(bytes, "application/pdf", "Mahdi Shams Resume.pdf");
        }

        public IActionResult SepehrShiraziResume() => View();
        public IActionResult SepehrShiraziResumeEn() => View();

        public IActionResult KimiaResume() => View();
        public IActionResult KimiaResumeEn() => View();

        public IActionResult DownloadKimiaResume()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "assets", "img", "person",
                "kimia.pdf");
            var bytes = System.IO.File.ReadAllBytes(path);
            return File(bytes, "application/pdf", "Kimia Keykhosrokiani Resume.pdf");
        }

        public IActionResult AminMahadiResume() => View();
        public IActionResult AminMahadiResumeEn() => View();

        public IActionResult DownloadAminMahadiResume()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "assets", "img", "person",
                "aminmadahi.pdf");
            var bytes = System.IO.File.ReadAllBytes(path);
            return File(bytes, "application/pdf", "Mohammad Amin Madahi Resume.pdf");
        }

        public IActionResult DownloadSepehrShiraziResume()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "assets", "img", "person",
                "SepehrShirazi.pdf");
            var bytes = System.IO.File.ReadAllBytes(path);
            return File(bytes, "application/pdf", "SepehrShirazi.pdf");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
            => View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
