## Implementing CRUD operations for Digital Art Collection

You have been assigned to build the backend for a new Digital Art Platform. This platform allows users to perform various operations for digital art pieces, such as creating a new entry, reading the existing entries, updating an entry, and deleting an entry from the collection.

Objectives:

Set up an Express server with necessary middlewares.

Create an ArtPiece class that can construct objects with properties id, title, artist, year, and imageUrl.

Implement an endpoint at '/api/artPieces' to add a new art piece to the collection.

Implement an endpoint at '/api/artPieces' to retrieve all art pieces in the collection. This endpoint should support filtering results with the 'year' and 'artist' fields.

Implement an endpoint at '/api/artPieces/:id' to retrieve a specific art piece by its id.

Implement an endpoint at '/api/artPieces/:id' to update the details of a specific art piece.

Implement an endpoint at '/api/artPieces/:id' to delete a specific art piece from the collection.

Expected Output: A server that can handle all the CRUD operations for managing the digital art pieces via respective endpoints.

Resources:

Express.js documentation: https://expressjs.com/en/5x/api.html

Note:

The id of an art piece should be determined based on the length of the existing art pieces in the collection plus 1.

For filtering results based on year and artist in the GET /api/artPieces endpoint, consider using query parameters.

In the response for a request to retrieve a non-existent art piece, use the text 'Art piece not found' along with an appropriate status code.
