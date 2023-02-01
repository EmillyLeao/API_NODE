class FormService {
    constructor (FormModel) {
      this.form = FormModel
    }
  
    async getForm () {
      const forms = await this.form.findAll()
      return forms
    }

    async getFormbyId(formId) {
      const form = await this.form.findByPk(formId)
      return form
  }
  
    async createForm (formObj) {
      try {
        await this.form.create(formObj)
      } catch (err) {
          console.error(err.message)
          throw err
      }
    }

    async updateForm(formObj) {
        try {
            await this.form.update(formObj, {
                where: {
                    id: formObj.id
                }
            });
        } catch(err) {
            console.error(err.message)
            throw err
        }
    }

    async deleteForm(formId) {
        try {
            await this.form.destroy({
                where: {
                    id: formId
                }
            });
        } catch(err) {
            console.error(err.message)
            throw err
        }
  }

}

  
  module.exports = FormService