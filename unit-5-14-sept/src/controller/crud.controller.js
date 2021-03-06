const post = (model) => async (req, res) => {
	const item = await model.create(req.body);
	return res.status(201).json({ item });
};

const get = (model) => async (req, res) => {
	const items = await model.find().lean().exec();
	return res.status(200).json({ items });
};

const getOne = (model) => async (req, res) => {
	const item = await model.findById(req.params.id).lean().exec();
	return res.status(200).json({ item });
};

const updateOne = (model) => async (req, res) => {
	const item = await model.findByIdAndUpdate(req.params.id).lean().exec();
	return res.status(200).json({ item });
};

const deleteOne = (model) => async (req, res) => {
	const item = await model.findByIdAndDelete(req.params.id).lean().exec();
	return res.status(200).json({ item });
};

module.exports = (model) => {
	return {
		post: post(model),
		get: get(model),
		getOne: getOne(model),
		updateOne: updateOne(model),
		deleteOne: deleteOne(model),
	};
};
