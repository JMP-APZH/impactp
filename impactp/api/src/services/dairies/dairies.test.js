import {
  dairies,
  dairy,
  createDairy,
  updateDairy,
  deleteDairy,
} from './dairies'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dairies', () => {
  scenario('returns all dairies', async (scenario) => {
    const result = await dairies()

    expect(result.length).toEqual(Object.keys(scenario.dairy).length)
  })

  scenario('returns a single dairy', async (scenario) => {
    const result = await dairy({ id: scenario.dairy.one.id })

    expect(result).toEqual(scenario.dairy.one)
  })

  scenario('creates a dairy', async () => {
    const result = await createDairy({
      input: {
        nom: 'String',
        prix: 'String',
        url: 'String',
        prixspecial: 'String',
        img: 'String',
        quantite: 'String',
        quantite2: 'String',
        prixunite: 'String',
        nutriscore: 'String',
        nutrifull: 'String',
        updatedAt: '2023-07-05T19:26:47.410Z',
      },
    })

    expect(result.nom).toEqual('String')
    expect(result.prix).toEqual('String')
    expect(result.url).toEqual('String')
    expect(result.prixspecial).toEqual('String')
    expect(result.img).toEqual('String')
    expect(result.quantite).toEqual('String')
    expect(result.quantite2).toEqual('String')
    expect(result.prixunite).toEqual('String')
    expect(result.nutriscore).toEqual('String')
    expect(result.nutrifull).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-07-05T19:26:47.410Z'))
  })

  scenario('updates a dairy', async (scenario) => {
    const original = await dairy({ id: scenario.dairy.one.id })
    const result = await updateDairy({
      id: original.id,
      input: { nom: 'String2' },
    })

    expect(result.nom).toEqual('String2')
  })

  scenario('deletes a dairy', async (scenario) => {
    const original = await deleteDairy({ id: scenario.dairy.one.id })
    const result = await dairy({ id: original.id })

    expect(result).toEqual(null)
  })
})
