export interface CaseStudyDetail {
  seoTitle: string;
  problem: string;
  data: string;
  analysis: string;
  dashboard: string;
  insight: string;
  businessImpact: string;
}

export interface PortofolioItem {
  id: string;
  kategori: string;
  warnaKategori: string;
  judul: string;
  seoTitle?: string;
  klien: string;
  labelKlien?: string;
  highlight: string;
  deskripsi: string;
  fitur: string[];
  metrikNilai: string;
  metrikLabel: string;
  linkGambar: string;
  linkProject: string;
  linkRepo?: string;
  techStack: string[];
  caseStudy?: CaseStudyDetail;
}

export interface ArtikelItem {
  id: string;
  judul: string;
  seoTitle: string;
  deskripsi: string;
  platform: 'Medium' | 'LinkedIn' | 'Substack' | 'Dev.to' | 'GitHub' | 'Internal';
  kategori: string;
  linkArtikel: string;
  linkGambar: string;
  tanggalPublikasi: string;
  waktuBaca: string;
  penulis: string;
}

