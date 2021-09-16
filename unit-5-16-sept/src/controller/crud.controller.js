const post = (model) => async (req, res) => {
	const item = await model.create(req.body);
	return res.status(201).json({ item });
};

const get = (model) => async (req, res) => {
	const size = +req.query.size || 10;
	const page = +req.query.page || 1;

	const offset = (page - 1) * size;

	const query = {};

	const items = await model
		.find(query)
		.sort({ age: 1 })
		.skip(offset)
		.limit(size)
		.lean()
		.exec();
	const totalDocuments = await model.find(query).countDocuments();
	const totalPages = Math.ceil(totalDocuments / size);

	return res.status(200).json({ data: { items, totalPages } });
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
