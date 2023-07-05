// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Dairies" titleTo="dairies" buttonLabel="New Dairy" buttonTo="newDairy">
        <Route path="/dairies/new" page={DairyNewDairyPage} name="newDairy" />
        <Route path="/dairies/{id:Int}/edit" page={DairyEditDairyPage} name="editDairy" />
        <Route path="/dairies/{id:Int}" page={DairyDairyPage} name="dairy" />
        <Route path="/dairies" page={DairyDairiesPage} name="dairies" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
