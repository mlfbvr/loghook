# Loghook
## Description
Loghook is a web application designed to help users log and manage their fishing catches. The application provides a user-friendly interface for recording details about each catch, including species, weight, location, and date. Users can view their catch history, edit entries, and gain insights into their fishing activities.

## Layout
<table>
  <tr>
    <td>Header</td>
  </tr>
  <tr>
    <td>Content</td>
  </tr>
  <tr>
    <td>Footer (optional)</td>
  </tr>
</table>

## Pages

### Homepage
URL : `/`
Path : `src/app/page.tsx`
Description : The homepage of the application, which serves as the main entry point for users. Will give buttons linking to other pages and a brief description of the application.

### New Catch
URL : `/catches/new`
Path : `src/app/catches/new/page.tsx`
Description : A page where users can create a new catch entry. This page will contain a form for users to input details about their catch, such as species, weight, location, and date.

### View Catches
URL : `/catches`
Path : `src/app/catches/page.tsx`
Description : A page that displays a list of all catches recorded by the user. Each entry will include details such as species, weight, location, and date. Users can click on an entry to view more details or edit the entry.


## Project Structure
| Folder | Description |
| ------ | ----------- |
| src/app/ | Application pages |
| src/components/ | Reusable React components |
| src/hooks/ | Custom React hooks |
| src/ui/ | UI components and utilities |
| src/repositories/ | Data access layer |
| src/services/ | Business logic and services |
| src/data/ | Database and schema |
