export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    let filteredArtPieces = [...ArtPiece.db];

    if (query.year) {
      filteredArtPieces = filteredArtPieces.filter(
        (artPiece) => artPiece.year === parseInt(query.year)
      );
    }

    if (query.artist) {
      const artistName = query.artist.toLowerCase();
      filteredArtPieces = filteredArtPieces.filter((artPiece) =>
        artPiece.artist.toLowerCase().includes(artistName)
      );
    }

    return filteredArtPieces;
  }

  static findOne(id) {
    return ArtPiece.db.find((art) => art.id == id);
  }

  static update(id, data) {
    const artPiece = ArtPiece.findOne(id);
    if (artPiece) {
      Object.assign(artPiece, data);
    }
    return artPiece;
  }

  static delete(id) {
    const index = ArtPiece.db.findIndex((art) => art.id == id);
    if (index !== -1) {
      ArtPiece.db.splice(index, 1);
    }
  }
}
