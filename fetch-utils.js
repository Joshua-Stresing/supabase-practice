const SUPABASE_URL = 'https://hogsvwpywyaxkjlqavnk.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvZ3N2d3B5d3lheGtqbHFhdm5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0MjgsImV4cCI6MTk1OTkxNzQyOH0.WAiLrZ3mwONCOVJiPp_a-AERLY-_YjL2j4b7vkU6QwQ';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
    const resp = await client.from('movies').select('*');
    return checkError(resp);
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
    const resp = await client.from('movies').select('directors (name)');
    return checkError(resp);
}

export async function getDirectorNames() {
  // return the list of the director's names
    const resp = await client.from('directors').select('name');
    return checkError(resp);
}

export async function getMovieById(id) {
  // return the movie with the given id
    const resp = await client.from('movies').select('*').eq('id', id).single();
    console.log(getMovieById);
    return checkError(resp);
}

export async function getMovieByTitle(title) {
  // return the movie with the given title
    const resp = await client.from('movies').select('*').like('title', title).single();
    return checkError(resp);
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
    const resp = await client.from('directors').select('name');
    return checkError(resp);
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
    const resp = await client.from('directors').select('name');
    return checkError(resp);
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
    const resp = await client.from('directors').select('name');
    return checkError(resp);
}
