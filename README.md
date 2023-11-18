# PizzaHub
 PizzaHub is a fictional app developed for study purposes.

## Phase 1
#### App Functions
- Built-in login for admin
- Login with firebase for others users
- Dashboard
    - Manage products
        - Show products infos
        - Set a price
        - Set if product can be sold
        - Set image
        - Add a product to other product (ingredient)
        - Show product suggested price (based on ingredients) if have
    - Manage users
        - Reset password
        - Set user level

## Technologies Used
### Back-End
- Typescript
- Node.js
- Express rest api
    - Zod validation
    - Json web tokens
- Knex query builder
    - Sqlite for development
    - PostgresSql for deploy
- Vitest testing library

### Front-End
- Typescript
- React + Vite framework
- TailwindCss style library
- React Query http client
- Recoil state management
- React Hook Forms
    - Zod validation
- Vitest testing library