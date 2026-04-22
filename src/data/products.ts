import onyxSoftcover from "@/assets/onyx-softcover-set.jpg";
import onyx1 from "@/assets/onyx-softcover-1.jpg";
import onyx2 from "@/assets/onyx-softcover-2.jpg";
import onyx3 from "@/assets/onyx-softcover-3.jpg";
import onyx4 from "@/assets/onyx-softcover-4.jpg";
import gratitude1 from "@/assets/gratitude-1.jpg";
import gratitude2 from "@/assets/gratitude-2.jpg";
import gratitude3 from "@/assets/gratitude-3.jpg";
import gratitude4 from "@/assets/gratitude-4.jpg";
import gratitude5 from "@/assets/gratitude-5.jpg";
import gratitude6 from "@/assets/gratitude-6.jpg";
import ahgxg1 from "@/assets/ahgxg-1.jpg";
import ahgxg2 from "@/assets/ahgxg-2.jpg";
import ahgxg3 from "@/assets/ahgxg-3.jpg";
import ahgxg4 from "@/assets/ahgxg-4.jpg";
import ahgxg5 from "@/assets/ahgxg-5.jpg";
import ahgxg6 from "@/assets/ahgxg-6.jpg";
import basic1 from "@/assets/basic-1.jpg";
import basic2 from "@/assets/basic-2.jpg";
import basic3 from "@/assets/basic-3.jpg";
import basic4 from "@/assets/basic-4.jpg";
import santhomeWhite1 from "@/assets/santhome-white-1.jpg";
import santhomeWhite2 from "@/assets/santhome-white-2.jpg";
import santhomeWhite3 from "@/assets/santhome-white-3.jpg";
import santhomeWhite4 from "@/assets/santhome-white-4.jpg";
import santhomeWhite5 from "@/assets/santhome-white-5.jpg";
import oneline1 from "@/assets/oneline-1.jpg";
import oneline2 from "@/assets/oneline-2.jpg";
import oneline3 from "@/assets/oneline-3.jpg";
import oneline4 from "@/assets/oneline-4.jpg";
import oneline5 from "@/assets/oneline-5.jpg";
import oneline6 from "@/assets/oneline-6.jpg";
import behere1 from "@/assets/behere-1.jpg";
import behere2 from "@/assets/behere-2.jpg";
import behere3 from "@/assets/behere-3.jpg";
import behere4 from "@/assets/behere-4.jpg";
import behere5 from "@/assets/behere-5.jpg";
import lavender1 from "@/assets/lavender-1.jpg";
import lavender2 from "@/assets/lavender-2.jpg";
import lavender3 from "@/assets/lavender-3.jpg";
import lavender4 from "@/assets/lavender-4.jpg";
import lavender5 from "@/assets/lavender-5.jpg";
import lavender6 from "@/assets/lavender-6.jpg";
import ahgxgBlack1 from "@/assets/ahgxg-black-1.jpg";
import ahgxgBlack2 from "@/assets/ahgxg-black-2.jpg";
import ahgxgBlack3 from "@/assets/ahgxg-black-3.jpg";
import ahgxgBlack4 from "@/assets/ahgxg-black-4.jpg";
import ahgxgBlack5 from "@/assets/ahgxg-black-5.jpg";
import ahgxgBlack6 from "@/assets/ahgxg-black-6.jpg";
import mastery1 from "@/assets/mastery-1.jpg";
import mastery2 from "@/assets/mastery-2.jpg";
import mastery3 from "@/assets/mastery-3.jpg";
import mastery4 from "@/assets/mastery-4.jpg";
import g365_1 from "@/assets/g365-1.jpg";
import g365_2 from "@/assets/g365-2.jpg";
import g365_3 from "@/assets/g365-3.jpg";
import g365_4 from "@/assets/g365-4.jpg";
import g365_5 from "@/assets/g365-5.jpg";
import g365_6 from "@/assets/g365-6.jpg";
import g365_7 from "@/assets/g365-7.jpg";
import g365_8 from "@/assets/g365-8.jpg";
import reading1 from "@/assets/reading-1.jpg";
import reading2 from "@/assets/reading-2.jpg";
import reading3 from "@/assets/reading-3.jpg";
import reading4 from "@/assets/reading-4.jpg";
import reading5 from "@/assets/reading-5.jpg";
import planner1 from "@/assets/planner-1.jpg";
import planner2 from "@/assets/planner-2.jpg";
import planner3 from "@/assets/planner-3.jpg";
import planner4 from "@/assets/planner-4.jpg";
import planner5 from "@/assets/planner-5.jpg";
import planner6 from "@/assets/planner-6.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
  description: string;
  images?: string[];
};

export const products: Product[] = [
  { id: "p2", name: "Santhome Classic A5 Hardcover Ruled Notebook - 192 Pages Durable Professional Journals with Elastic Band & Expandable Inner Pocket – Ideal for Office, School & Personal Use, Diaries - Black (Pack of 5)", category: "Notebooks", price: 50, img: onyxSoftcover, description: "Five A5 hardcover ruled journals — 192 pages each, elastic band closure, ribbon marker, and an expandable inner pocket. Built for office, school and personal use.", images: [onyxSoftcover, onyx1, onyx2, onyx3, onyx4] },
  { id: "p9", name: "Gratitude Journal with Metal Pen, for More Happiness, Positivity, Mindfulness & Self Care, A Simple Effective Daily Mindfulness Journal, for Women & Men (White)", category: "Notebooks", price: 60, img: gratitude1, description: "The original five-minute gratitude journal — linen hardcover, lay-flat binding, 100% recycled non-bleed paper, undated and lasts six months. Paired with a black-and-gold metal rollerball pen.", images: [gratitude1, gratitude2, gratitude3, gratitude4, gratitude5, gratitude6] },
  { id: "p10", name: "AHGXG Bullet Dotted Journal - 320 Numbered Pages Dot Grid Notebook A5 Thick Journal, 100gsm Thick Dotted Paper, Leather Hardcover, Inner Pocket, 5.75'' × 8.38'' - Green", category: "Notebooks", price: 55, img: ahgxg1, description: "A5 dotted journal with 320 numbered pages, 100gsm bleed-resistant paper, leather hardcover, elastic band, ribbon marker, inner pocket and a free journal stencil.", images: [ahgxg1, ahgxg2, ahgxg3, ahgxg4, ahgxg5, ahgxg6] },
  { id: "p11", name: "2Pcs Lined Journal Notebook, A4 Hardcover Journal with 200 Pages, and Two Fountain Pens, 100g Paper, College Ruled, Suitable for Work, Study, Diary, and Business Use (Black)", category: "Notebooks", price: 54, img: basic1, description: "Set of two A4 hardcover journals with 200 lined pages each, 100gsm acid-free paper, lay-flat 180° binding, elastic band, pen holder and ribbon bookmark — paired with two fountain pens.", images: [basic1, basic2, basic3, basic4] },
  { id: "p12", name: "Santhome Classic A5 Hardcover Ruled Notebook/Diary - 192 Pages Durable Professional Journals with Elastic Band & Expandable Inner Pocket | Ideal for Office, School & Personal Use, Writing Pads (White)", category: "Notebooks", price: 20, img: santhomeWhite1, description: "A5 hardcover ruled journal with 192 pages, elastic band closure, ribbon marker and an expandable inner pocket. Built for office, school and personal use.", images: [santhomeWhite1, santhomeWhite2, santhomeWhite3, santhomeWhite4, santhomeWhite5] },
  { id: "p13", name: "Canvas One Line a Day: A Five-Year Memory Journal Diary – Notebook", category: "Notebooks", price: 89, img: oneline1, description: "A five-year memory journal in a tactile canvas hardcover. Each page holds one short entry per day across five successive years, so you can revisit past thoughts and watch how you change.", images: [oneline1, oneline2, oneline3, oneline4, oneline5, oneline6] },
  { id: "p14", name: "Graphique Hardbound Spiral Journal | Be Here Now Calming Watercolor Design | Premium Paper | Notebook | Diary | Lists | Record Month and Date | Great Gift | 160 Ruled Pages | 6.25” x 8.25”", category: "Notebooks", price: 51, img: behere1, description: "Spiral-bound hardcover journal with a calming 'Be Here Now' watercolor design and gold foil. 160 ruled pages of premium off-white stock, 6.25\" × 8.25\" — a great gift for lists, journaling and daily notes.", images: [behere1, behere2, behere3, behere4, behere5] },
  { id: "p15", name: "Red Dot Gift® A5 Lavender Color 192 pages Dotted Notebook, Perfect for Creative Writing and Organizing Your Thoughts with Eco-Friendly Paper, Durable Binding, and Stylish Design", category: "Notebooks", price: 24, img: lavender1, description: "A5 lavender hardcover dotted notebook with 192 pages of 80gsm no-bleed eco-friendly paper, lay-flat lockstitch binding, elastic band, pen loop and ribbon bookmark. Perfect for creative writing and organizing your thoughts.", images: [lavender1, lavender2, lavender3, lavender4, lavender5, lavender6] },
  { id: "p16", name: "AHGXG Bullet Dotted Journal - 320 Numbered Pages Dot Grid Notebook A5 Thick Journal, 100gsm Thick Dotted Paper, Leather Hardcover, Inner Pocket, 5.75'' × 8.38'' - Black", category: "Notebooks", price: 70, img: ahgxgBlack1, description: "A5 dotted journal with 320 numbered pages, 100gsm bleed-resistant paper, leather hardcover, elastic band, ribbon marker, inner pocket and a free journal stencil — in black.", images: [ahgxgBlack1, ahgxgBlack2, ahgxgBlack3, ahgxgBlack4, ahgxgBlack5, ahgxgBlack6] },
  { id: "p17", name: "Self-Mastery Journal for Men - Gratitude and Productivity Journal for More Happiness, Positivity, Growth, Mindfulness, Self Care and Reflection - Guided Inspirational Journal for Men & Women (Black)", category: "Notebooks", price: 91, img: mastery1, description: "A 13-week guided gratitude and productivity journal in a premium black linen hardcover. Daily prompts for goals, gratitude, affirmation and reflection with morning and evening routines, quotes, pen holder, ribbon bookmark and 100gsm acid-free no-bleed paper.", images: [mastery1, mastery2, mastery3, mastery4] },
  { id: "p18", name: "365 Days of Gratitude: A Day and Night Reflection Journal", category: "Notebooks", price: 69, img: g365_1, description: "A blush-pink 365-day reflection journal with rose-gold foil cover. Each page guides a morning meditation and evening reflection, with monthly 30-day reflections to capture growth across the year. Hardcover with ribbon bookmark.", images: [g365_1, g365_2, g365_3, g365_4, g365_5, g365_6, g365_7, g365_8] },
  { id: "p19", name: "KUNITSA CO. Reading Journal. Book Journal for Book Lovers & Readers. Review and Track Your Reading (Green)", category: "Notebooks", price: 97, img: reading1, description: "A sage-green linen hardcover reading journal with gold foil accents. Track your reading challenge, books to read, books finished with star ratings, daily reading tracker and an index — 52 review spreads on ivory paper with lay-flat binding.", images: [reading1, reading2, reading3, reading4, reading5] },
  { id: "p20", name: "A5 Notebook, College Ruled Journal, Ruled Notepad, Daily Journal for Women Men Office, School, Pink", category: "Notebooks", price: 58, img: planner1, description: "A5 pink hardcover daily & monthly planner — 400 pages of premium thick paper, 12 colored index dividers, sturdy pen holder, foldable inner pocket, elastic band and ribbon bookmark. Includes monthly views, daily timeline, annual plan, calendar, finance log and contacts.", images: [planner1, planner2, planner3, planner4, planner5, planner6] },
];

export const categories = ["All", "Notebooks"] as const;

