import { db } from 'src/lib/db'

export const dairies = () => {
  return db.dairy.findMany()
}

export const dairy = ({ id }) => {
  return db.dairy.findUnique({
    where: { id },
  })
}

export const createDairy = ({ input }) => {
  return db.dairy.create({
    data: input,
  })
}

export const updateDairy = ({ id, input }) => {
  return db.dairy.update({
    data: input,
    where: { id },
  })
}

export const deleteDairy = ({ id }) => {
  return db.dairy.delete({
    where: { id },
  })
}
